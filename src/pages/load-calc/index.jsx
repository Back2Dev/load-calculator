import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { DataProvider, useData } from './DataContext'
import Calc from './calc'

const theme = createTheme({
  palette: {
    primary: {
      main: '#005288',
    },
    secondary: {
      main: '#00A4E4',
    },
    light: {
      main: '#E4F1FB',
    },
    danger: {
      main: '#BE1E2D',
    },
    success: {
      main: '#00D100',
    },
    white: {
      main: '#fff',
    },
    black: {
      main: '#000',
    },
  },
})

function App() {
  const { applianceGroups } = useData()

  return (
    <>
      <ThemeProvider theme={theme}>
        <DataProvider>
          <Calc applianceGroups={applianceGroups} />
        </DataProvider>
      </ThemeProvider>
    </>
  )
}

export default App
