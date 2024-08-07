import React from 'react'
import { TextField, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import InputAdornment from '@mui/material/InputAdornment'

import Item from './Item'
import { useData } from '../DataContext'
import { useTheme } from '@emotion/react'
import SummaryRow from './SummaryRow'

const RowSpacer = () => <Grid xs={12} my={0.5}></Grid>

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
    <Box
      p={2}
      sx={{ flexGrow: 1 }}
    >
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
        <SummaryRow
          description="Percent of appliances on at once"
          value={percentActive}
          keyName={'percentActive'}
          defaultValue={80}
          editable={true}
          suffix="%"
        />
        <SummaryRow
          description="Continuous load"
          value={continuousLoad}
          keyName={'continuousLoad'}
          suffix="kW"
        />
        <RowSpacer />
        <SummaryRow
          description="Mid winter effective sun hours"
          value={winterSunHours}
          keyName={'winterSunHours'}
          suffix="hours"
          defaultValue={2}
          editable={true}
        />
        <SummaryRow
          description="Minimum solar PV"
          value={minSolar}
          keyName={'minSolar'}
          suffix="kW"
        />
        <RowSpacer />
        <SummaryRow
          description="Nominated battery depth of discharge (DoD)"
          value={dod}
          keyName={'dod'}
          suffix={'%'}
          defaultValue={80}
          editable={true}
        />
        <SummaryRow
          description="Nominated days of autonomy (DoA)"
          value={doa}
          keyName={'doa'}
          suffix={doa > 1 ? 'days' : 'day'}
          defaultValue={2}
          editable={true}
        />
        <RowSpacer />
        <SummaryRow
          description="Minimum required battery capacity"
          value={nameplate}
          keyName={'nameplate'}
          suffix="kWh"
        />
      </Grid>
    </Box>
  )
}

export default Summary
