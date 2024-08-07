import React from 'react'
import { TextField, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import InputAdornment from '@mui/material/InputAdornment'

import Item from './Item'
import { useData } from '../DataContext'
import { useTheme } from '@emotion/react'
import SummaryRow from './SummaryRow'
import ContactHeader from './ContactHeader'

const RowSpacer = () => <Grid xs={12} my={0.5}></Grid>

const ContactForm = () => {
  const {
    fname,
    lname,
    email,
    phone,
    refno,
  } = useData()

  const handleUpdate = (e, variableName) => {
    const value = Number(e.target.value)
    updateCalculationVariable(variableName, value)
  }

  const theme = useTheme()

  return (
    <Box
    backgroundColor="#E4F1FB"
    width={750}
    height="fit-content"
    p={4}
    sx={{ flexGrow: 1 }}
    mt={6}
  >
    <Grid container rowSpacing={1} columnSpacing={2}>
      <SummaryRow
        description="First Name"
        value={fname}
      />

      <SummaryRow
        description="Last Name"
        value={lname}
      />


      <SummaryRow
        description="Email"
        value={email}

      />

      <SummaryRow
        description="Phone"
        value={phone}
      />

      <SummaryRow
        description="Reference Number"
        value={refno}
      />

    </Grid>
  </Box>
)
}

export default ContactForm