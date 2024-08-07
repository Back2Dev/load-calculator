import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useTheme } from '@emotion/react'

const ContactHeader = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        backgroundColor={theme.palette.primary.main}
        height="fit-content"
        px={12}
        pt={3}
        pb={2}
        sx={{ flexGrow: 1 }}
      >
        <Grid>
          <Grid sx={{ textAlign: 'left', alignSelf: 'center' }}>
            <Typography
              color={theme.palette.white.main}
              fontWeight="bold"
              fontSize={16}
              variant="subtitle2"
            >
              FOR YOUR REFERENCE
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        backgroundColor={theme.palette.secondary.main}
        height="3px"
        sx={{ flexGrow: 1 }}
      ></Box>
    </>
  )
}

export default ContactHeader
