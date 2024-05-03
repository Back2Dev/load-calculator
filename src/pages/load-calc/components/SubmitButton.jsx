import React from 'react'
import { Button, Box } from '@mui/material'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'
import axios from 'axios'
import dbg from 'debug'
import { useData } from '../DataContext'

const debug = dbg('app:submit')

const SubmitButton = () => {
  const formData = useData() || {}
  const [status, setStatus] = React.useState('')

  const submitForm = async () => {
    try {
      formData.appliances = Object.entries(formData?.applianceGroups)
        .map(([groupName, appliances]) => {
          return appliances.filter(({ quantity }) => quantity > 0)
        })
        .flat()

      delete formData.applianceGroups
      const body = {
        form: 'dpa-load-calc',
        formData,
      }
      const response = await axios.post('https://dpa.requestcatcher.com/test', body, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: false,
      })
      if (response.status !== 200)
        return { status: 'failed', message: response.data[0].message }

      if (!response.data.length) setStatus('Failed: Missing data info from response')

      setStatus('Success')
    } catch (error) {
      console.error(error)
      setStatus('Failed to send email: ' + error.message)
    }
  }

  return (
    <Box my={8}>
      <Button variant="contained" onClick={submitForm} size="large">
        Submit
      </Button>
      {status === 'success' && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Success,
        </Alert>
      )}
    </Box>
  )
}

export default SubmitButton
