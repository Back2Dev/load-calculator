import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useTheme } from '@emotion/react'

const SummaryHeader = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        backgroundColor={theme.palette.primary.main}
        // width="100%"
        height="fit-content"
        px={4}
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
              CONSUMPTION SUMMARY
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        backgroundColor={theme.palette.secondary.main}
        // width="100%"
        height="3px"
        sx={{ flexGrow: 1 }}
      ></Box>
    </>
  )
}

export default SummaryHeader
