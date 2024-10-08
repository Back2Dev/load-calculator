import React from 'react'
import { Button, Box, Collapse } from '@mui/material'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'
import ErrorIcon from '@mui/icons-material/WarningAmber'
import axios from 'axios'
import cloneDeep from 'lodash/cloneDeep'
import dbg from 'debug'
import { useData } from '../DataContext'

const debug = dbg('app:submit')

const SubmitButton = () => {
  const theData = useData() || {}
  const [status, setStatus] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [file, setFile] = React.useState('')

  const submitForm = async () => {
    try {
      const formData = cloneDeep(theData)
      formData.appliances = Object.entries(formData?.applianceGroups)
        .map(([groupName, appliances]) => {
          return appliances.filter(({ quantity }) => quantity > 0)
        })
        .flat()

      delete formData.applianceGroups
      const body = {
        form: 'dpa-load-calc',
        formData,
        surveySlug: 'dpa-load-calc-v1',
      }
      setFile('')
      setStatus('')
      const response = await axios.post(import.meta.env.VITE_FORMS_SERVER, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
        },
      })
      if (response.status !== 200)
        return { status: 'failed', message: response.data[0].message }

      if (!response.data.length) {
        setStatus(status)
        setMessage('Failed: Missing data info from response')
      }

      setStatus('Success')
      setMessage('')
      setFile(response.data.url)
    } catch (error) {
      console.error(error)
      setStatus('Failed')
      const msg = error.response?.statusText
        ? `${error.response.status}: ${error.response.statusText}`
        : error.message
      setMessage(msg)
    }
  }

  const ok = status.match(/success/i)
  return (
    <Box
      sx={{
        justifyContent: 'center',
        marginTop: '2rem',
        marginBottom: '3rem',
      }}
    >
      <Button
        variant="contained"
        onClick={submitForm}
        size="large"
        sx={{ marginBottom: '1rem' }}
      >
        Generate Report
      </Button>
      <Collapse in={status !== ''}>
        <Alert
          icon={ok ? <CheckIcon fontSize="inherit" /> : <ErrorIcon fontSize="inherit" />}
          severity={ok ? 'success' : 'error'}
          sx={{ width: '20%', marginLeft: '40%' }}
        >
          {status} {message}
        </Alert>
      </Collapse>
      <Collapse in={file !== ''}>
        <Button
          href={file}
          target="_blank"
          variant="contained"
          size="large"
          color="secondary"
          sx={{ marginTop: '1rem' }}
        >
          Download
        </Button>
      </Collapse>
    </Box>
  )
}

export default SubmitButton
