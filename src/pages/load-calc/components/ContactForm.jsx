import React from 'react'
import { TextField, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useData } from '../DataContext'
import { useTheme } from '@emotion/react'
import ContactRow from './ContactRow'

const ContactForm = () => {
  const {
    name,
    email,
    phone,
    refno,
  } = useData()

  const theme = useTheme()

  return (
    <Box
    p={2}
    sx={{ flexGrow: 1 }}
  >
    <Grid container rowSpacing={2} columnSpacing={1}>
      <ContactRow
        description="Name"
        value={name}
      />
      <ContactRow
        description="Email"
        value={email}
      />
      <ContactRow
        description="Phone"
        value={phone}
      />
      <ContactRow
        description="Reference Number"
        value={refno}
      />

    </Grid>
  </Box>
)
}

export default ContactForm