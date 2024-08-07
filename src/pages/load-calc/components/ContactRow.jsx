import React, {useState} from 'react'
import { TextField, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useData } from '../DataContext'
import { useTheme } from '@emotion/react'


const ContactRow = ({
  description,
  initalValue,
  editable = false,
  onUpdate,
}) => {

  const [value, setValue] = useState(initalValue);
  const theme = useTheme()

const handleInputChange = (event) => {
    setValue(event.target.value);
    if (onUpdate) {
      onUpdate(event.target.value);
    }
  };

  return (
    <>
      <Grid xs={5}>
        <TextField
          size="small"
          value={description}
          sx={{
            border: 0,
            backgroundColor: theme.palette.white.main,
            '& .MuiOutlinedInput-input': {
              height: '1.25rem',
              color: theme.palette.primary.main,
              textAlign: 'left',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />
      </Grid>

      <Grid xs={6} >
        <TextField
          size="small"
          fullWidth
          value={value}
          onChange={editable ? handleInputChange : null}
          sx={{
            backgroundColor: theme.palette.white.main,
            '& .MuiOutlinedInput-input': {
              height: '1.25rem',
              color: theme.palette.primary.main,
              textAlign: 'right',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border:
                editable && (value === '' || value === 0) ? '3px solid red' : 'none',
            },
          }}
        />
      </Grid>
    </>
  )
}

export default ContactRow
