import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'

import CancelIcon from '@mui/icons-material/Cancel'
import { useData } from '../DataContext'
import { useTheme } from '@emotion/react'
import InputAdornment from '@mui/material/InputAdornment'
import Slider from '@mui/material/Slider'
import Item from './Item'

const SliderLabel = ({
  range = [0, 100],
  step = 20,
  suffix = '%',
  sliderChange,
  defaultValue,
}) => {
  const marks = []
  for (let n = range[0]; n <= range[1]; n = n + step) {
    marks.push({ value: n, label: `${n}${suffix}` })
  }

  return (
    <Slider
      aria-label={`Select value from ${range[0]} to ${range[1]}`}
      defaultValue={defaultValue}
      getAriaValueText={(value, index) => marks[index].label}
      step={step > 1 ? step / 2 : step}
      marks={marks}
      min={range[0]}
      max={range[1]}
      onChange={sliderChange}
    />
  )
}

const SliderRow = ({
  description,
  value,
  keyName,
  defaultValue,
  range = [0, 100],
  step = 20,
  suffix = '%',
}) => {
  const { updateCalculationVariable } = useData()

  const handleUpdate = (e, variableName) => {
    const value = e.target.value
    updateCalculationVariable(variableName, value)
  }

  const theme = useTheme()

  const resetValue = () => updateCalculationVariable(keyName, defaultValue)

  return (
    <>
      <Grid xs={5}>
        <Typography variant="body1" gutterBottom color="navy" sx={{ textAlign: 'left' }}>
          {description}
        </Typography>
      </Grid>

      <Grid xs={5} xsOffset={1}>
        <SliderLabel
          range={range}
          step={step}
          suffix={suffix}
          defaultValue={defaultValue}
          sliderChange={(e, newValue) => {
            e.target.value = newValue
            handleUpdate(e, keyName)
          }}
        />
      </Grid>
    </>
  )
}

export default SliderRow
