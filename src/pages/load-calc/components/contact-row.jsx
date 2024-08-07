import React from 'react'
import { TextField, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import InputAdornment from '@mui/material/InputAdornment'

import CancelIcon from '@mui/icons-material/Cancel'
import Item from './Item'
import { useData } from '../DataContext'
import { useTheme } from '@emotion/react'

import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'

const ContactRow = ({ description, value, field, suffix, keyName, defaultValue }) => {
  const { updateCalculationVariable } = useData()

  const handleUpdate = (e, variableName) => {
    const value = e.target.value.replace(/[^\d.]/g, '')
    updateCalculationVariable(variableName, value)
  }

  const theme = useTheme()

  const resetValue = () => updateCalculationVariable(keyName, defaultValue)

  return (
    <Grid xs={12}>
      <TextField
        width="100%"
        size="small"
        label={description}
        // variant="standard"
        margin="none"
        value={value}
        id={field}
        onChange={(e) => handleUpdate(e, keyName)}
        sx={{
          width: '80%',
          backgroundColor: theme.palette.white.main,
          '& .MuiOutlinedInput-input': {
            height: '1.25rem',
            color: theme.palette.primary.main,
            textAlign: 'right',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: value === '' || value === 0 ? '3px solid red' : 'none',
          },
        }}
      />
    </Grid>
  )
}

export default ContactRow
