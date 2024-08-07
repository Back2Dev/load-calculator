import React from 'react'
import { styled } from '@mui/material/styles'
import { Paper } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.main,
  height: '1.75rem',
}))

export default Item
