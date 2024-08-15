import React from 'react'
import { TextField, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Alert from '@mui/material/Alert'
import { useData } from '../DataContext'
import { useTheme } from '@emotion/react'
import ContactRow from './contact-row'
import ContactHeader from './ContactHeader'
const alertStyle = {
  width: '100%',
  backgroundColor: 'transparent',
  border: '1px solid #00A4E4',
  textAlign: 'left',
}
const RowSpacer = () => <Grid xs={12} my={0.5}></Grid>

const ContactForm = () => {
  const { name, email, phone, reference } = useData()

  const theme = useTheme()

  return (
    <Box
      p={4}
      sx={{ flexGrow: 1 }}
    >
      <Typography
        color={theme.palette.primary.main}
        textAlign="left"
        fontSize={18}
        lineHeight={1.5}
        mx={2}
        mb={2}
      >
        We will send a copy of the calculations to your email - please fill in your details so your report can be identified.
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={2}>
        <ContactRow
          description="Your reference (number, name, or address)"
          value={reference}
          field="reference"
        />
        <ContactRow description="Your name" value={name} field="name" />

        <ContactRow description="Email" value={email} field="email" />

        <ContactRow description="Phone (optional)" value={phone} field="phone" />

        <RowSpacer />

        <Alert severity="info" style={alertStyle}>
          By providing us with your details you agree that we might contact you about the
          Load Calculator.
          <ul>
            <li>A copy of the file will be kept for future reference.</li>
            <li>We will never email you marketing information.</li>
            <li>We will never sell your information to anyone.</li>
          </ul>
        </Alert>
      </Grid>
    </Box>
  )
}

export default ContactForm
