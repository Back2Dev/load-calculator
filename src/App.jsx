import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { styled } from '@mui/material/styles';
import { TextField, Box, Paper, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import ApplianceGroup from './components/ApplianceGroup';
import Item from './components/Item';
import Summary from './components/Summary';

import { defaultData } from './assets/defaultData';
import { DataProvider, useData } from './DataContext';

import { cloneDeep } from 'lodash';

import { createTheme, ThemeProvider } from '@mui/material/styles';


import SvgIcon from '@mui/material/SvgIcon';
import TestIcon from './assets/iconComponents/TestIcon'



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
      main: '#00D100'
    }
  },
});


const add = (a, b) => a + b



function App() {
  const { applianceGroups } = useData()

  return (
    <>
      <ThemeProvider theme={theme}>
        <DataProvider>

          <Typography variant='h4' my={5}>
            Load Calculator
          </Typography>


          <Box backgroundColor={theme.palette.light.main} width='800px' height='fit-content' p={4} sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={2}>
              <Grid xs={5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Appliance</Item></Grid>
              <Grid xs={1.5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Quantity</Item></Grid>
              <Grid xs={1.5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Watts</Item></Grid>
              <Grid xs={1.5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Hrs/Day</Item></Grid>
              <Grid xs={1.5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>W/Day</Item></Grid>

            </Grid>

            {
              Object.entries(applianceGroups).map(([groupName, appliances], index) => (
                <ApplianceGroup key={`${groupName}-${index}`} groupName={groupName} appliances={appliances} />
              ))
            }

          </Box>

          <Summary />
        </DataProvider>
      </ThemeProvider>
    </>
  )
}

export default App
