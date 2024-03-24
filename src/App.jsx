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
    },
    white: {
      main: '#fff'
    },
    black: {
      main: '#000'
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


          <Box backgroundColor={theme.palette.white.main} width={1000} height='fit-content' pb={6} sx={{ flexGrow: 1 }}>


            <Box width='1000px' height='50px' pt={3} pb={1} sx={{
              flexGrow: 1,
              backgroundImage: 'linear-gradient(to right, #005288 , #00A4E4)'
            }}>
              <Typography variant='h4' fontWeight='bold' color={theme.palette.white.main} textAlign='left' ml={8}>
                Off-grid Load Calculator
              </Typography>
            </Box>


            <Box width={800} height='fit-content' mx={8} my={4}>
              <Typography color={theme.palette.black.main} textAlign='left' fontSize={18} lineHeight={1.5} variant='subtitle2'>
                We want to help you calculate the system that’s right for you.
                Fill out the table below to estimate energy usage.
                We’ve included some common household appliances.
                Try to account for everything.
                <br></br>
                <ul>
                  <li>Select the appliances that are in the home or business.</li>
                  <li>Use the plus or minus arrows to increase the number of units.</li>
                  <li>Fill out ‘Watts’ - you can check this on the name plate of the applicance.</li>
                  <li>Fill out ’hours’ - you can confirm this with the property occupants.</li>
                  <li>Select ‘More appliances’ for more options or to enter an applicance not initially displayed.</li>
                </ul>
              </Typography>


            </Box>


            <Box width={800} height='fit-content' mx={8}>

              <Box backgroundColor={theme.palette.primary.main} width={800} height='fit-content' px={4} pt={2} pb={1} sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={0} columnSpacing={2}>
                  <Grid xs={5.0} sx={{ textAlign: 'left', alignSelf: 'center' }}>
                    <Typography color={theme.palette.white.main} fontWeight='bold' fontSize={16} lineHeight={1.0} variant='subtitle2'>APPLIANCE</Typography>
                  </Grid>

                  <Grid xs={2} sx={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Typography color={theme.palette.white.main} fontWeight='bold' fontSize={16} lineHeight={1.0} variant='subtitle2'>QUANTITY</Typography>
                  </Grid>

                  <Grid xs={1.5} sx={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Typography color={theme.palette.white.main} fontWeight='bold' fontSize={16} lineHeight={1.0} variant='subtitle2'>WATTS</Typography>
                  </Grid>

                  <Grid xs={1.5} sx={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Typography color={theme.palette.white.main} fontWeight='bold' fontSize={16} lineHeight={1.0} variant='subtitle2'>HOURS<br></br> PER DAY</Typography>
                  </Grid>
                  <Grid xs={1.5} sx={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Typography color={theme.palette.white.main} fontWeight='bold' fontSize={16} lineHeight={1.0} variant='subtitle2'>WATT HRS PER DAY</Typography>
                  </Grid>
                  <Grid xs={0.5} sx={{ textAlign: 'center', alignSelf: 'center' }}>
                    <Typography color={theme.palette.white.main} fontWeight='bold' fontSize={16} lineHeight={1.0} variant='subtitle2'></Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box backgroundColor={theme.palette.secondary.main} width='800px' height='3px' px={4} py={0} sx={{ flexGrow: 1 }}>
              </Box>


              <Box backgroundColor={theme.palette.light.main} width='800px' height='fit-content' px={4} py={2} sx={{ flexGrow: 1 }}>
                {
                  Object.entries(applianceGroups).map(([groupName, appliances], index) => (
                    <ApplianceGroup key={`${groupName}-${index}`} groupName={groupName} appliances={appliances} />
                  ))
                }
              </Box>

              <Summary />

            </Box>

          </Box>

        </DataProvider>
      </ThemeProvider >
    </>
  )
}

export default App
