import React from 'react'
import { TextField, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import InputAdornment from '@mui/material/InputAdornment'
import Alert from '@mui/material/Alert'

import Item from './Item'
import { useData } from '../DataContext'
import { useTheme } from '@emotion/react'
import SummaryRow from './SummaryRow'
import SliderRow from './slider-row'

const RowSpacer = () => <Grid xs={12} my={0.5}></Grid>

const alertStyle = {
  width: '100%',
  backgroundColor: 'transparent',
  border: '1px solid #00A4E4',
}

const Summary = () => {
  const {
    totalLoad,
    dailyUsage,
    continuousLoad,
    percentActive,
    doa,
    winterSunHours,
    nameplate,
    minSolar,
    updateCalculationVariable,
    dod,
  } = useData()

  const handleUpdate = (e, variableName) => {
    const value = Number(e.target.value)
    updateCalculationVariable(variableName, value)
  }

  const theme = useTheme()
  
  return (
    <Box p={2} sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={2}>
        <SummaryRow
          description="Daily kWh usage"
          value={dailyUsage}
          keyName={'dailyUsage'}
          suffix="kWh"
        />
        <SummaryRow
          description="Peak load (total load)"
          value={totalLoad}
          keyName={'totalLoad'}
          suffix="kW"
        />
        <RowSpacer />

        <Alert severity="info" sx={alertStyle}>
          Use the sliders to adjust your parameters, and calculate required battery
          capacity and minimum solar PV.
        </Alert>
        <RowSpacer />

        <SliderRow
          description="Percent of appliances on at once"
          value={percentActive}
          keyName={'percentActive'}
          defaultValue={80}
          editable={true}
          range={[0, 100]}
          step={20}
          suffix="%"
        />

        <RowSpacer />

        <SliderRow
          description="Mid winter effective sun hours"
          value={winterSunHours}
          keyName={'winterSunHours'}
          defaultValue={2}
          range={[1, 6]}
          step={1}
          suffix="h"
        />

        <SliderRow
          description="Nominated battery depth of discharge (DoD)"
          value={dod}
          keyName={'dod'}
          defaultValue={70}
          range={[0, 100]}
          step={20}
          suffix="%"
        />

        <SliderRow
          description="Nominated days of autonomy (DoA)"
          value={doa}
          keyName={'doa'}
          defaultValue={2}
          range={[0, 10]}
          step={2}
          suffix="d"
        />
        <RowSpacer />
        <SummaryRow
          description="Continuous load"
          value={continuousLoad}
          keyName={'continuousLoad'}
          suffix="kW"
        />
        <SummaryRow
          description="Minimum solar PV"
          value={minSolar}
          keyName={'minSolar'}
          suffix="kW"
        />
        <SummaryRow
          description="Minimum required battery capacity"
          value={nameplate}
          keyName={'nameplate'}
          suffix="kWh"
        />
        <RowSpacer />
        <RowSpacer />

        <Alert severity="warning" sx={alertStyle}>
          Note that calculations are an approximation, and should only be used as a reference.
        </Alert>
      </Grid>
    </Box>
  )
}

export default Summary
