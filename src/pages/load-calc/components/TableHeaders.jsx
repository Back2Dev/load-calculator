import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useTheme } from '@emotion/react'

const TableHeaders = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        backgroundColor={theme.palette.primary.main}
        width="100%"
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
              APPLIANCE
            </Typography>
          </Grid>

          <Grid xs={2} sx={{ textAlign: 'center', alignSelf: 'center' }}>
            <Typography
              color={theme.palette.white.main}
              fontWeight="bold"
              fontSize={16}
              lineHeight={1.0}
              variant="subtitle2"
            >
              QUANTITY
            </Typography>
          </Grid>

          <Grid xs={1.5} sx={{ textAlign: 'center', alignSelf: 'center' }}>
            <Typography
              color={theme.palette.white.main}
              fontWeight="bold"
              fontSize={16}
              lineHeight={1.0}
              variant="subtitle2"
            >
              WATTS
            </Typography>
          </Grid>

          <Grid xs={1.5} sx={{ textAlign: 'center', alignSelf: 'center' }}>
            <Typography
              color={theme.palette.white.main}
              fontWeight="bold"
              fontSize={16}
              lineHeight={1.0}
              variant="subtitle2"
            >
              H/DAY
            </Typography>
          </Grid>
          <Grid xs={1.5} sx={{ textAlign: 'center', alignSelf: 'center' }}>
            <Typography
              color={theme.palette.white.main}
              fontWeight="bold"
              fontSize={16}
              lineHeight={1.0}
              variant="subtitle2"
            >
              WATT/H/DAY
            </Typography>
          </Grid>
          <Grid xs={0.5} sx={{ textAlign: 'center', alignSelf: 'center' }}>
            <Typography
              color={theme.palette.white.main}
              fontWeight="bold"
              fontSize={16}
              lineHeight={1.0}
              variant="subtitle2"
            ></Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        backgroundColor={theme.palette.secondary.main}
        width="100%"
        height="3px"
        px={4}
        py={0}
        sx={{ flexGrow: 1 }}
      ></Box>
    </>
  )
}

export default TableHeaders
