import React from 'react'
import { Button, Box } from '@mui/material'
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
      const response = await axios.post('http://localhost:2060/forms/submit', body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 95cb-dfc2-64ab-435f-9d14-e5cd-92a9-6d6a-b74e-4130',
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
    <Box my={8}>
      <Button variant="contained" onClick={submitForm} size="large">
        Submit
      </Button>
      {status !== '' && (
        <Alert
          icon={ok ? <CheckIcon fontSize="inherit" /> : <ErrorIcon fontSize="inherit" />}
          severity={ok ? 'success' : 'error'}
        >
          {status} {message}
        </Alert>
      )}
    </Box>
  )
}

export default SubmitButton
