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
        px={4}
        pt={2}
        pb={1}
        sx={{ flexGrow: 1 }}
      >
        <Grid container rowSpacing={0} columnSpacing={2}>
          <Grid xs={5.0} sx={{ textAlign: 'left', alignSelf: 'center' }}>
            <Typography
              color={theme.palette.white.main}
              fontWeight="bold"
              fontSize={16}
              lineHeight={1.0}
              variant="subtitle2"
            >
              FOR YOUR REFERENCE...
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        backgroundColor={theme.palette.secondary.main}
        height="3px"
        px={4}
        py={0}
        sx={{ flexGrow: 1 }}
      ></Box>
    </>
  )
}

export default ContactHeader
