import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import useMediaQuery from '@mui/material/useMediaQuery'

import { styled } from '@mui/material/styles'
import {
  TextField,
  Box,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import ApplianceGroup from './components/ApplianceGroup'
import Item from './components/Item'
import Summary from './components/Summary'

import { defaultData } from './assets/defaultData'
import { DataProvider, useData } from './DataContext'

import { cloneDeep } from 'lodash'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import SvgIcon from '@mui/material/SvgIcon'
import TableHeaders from './components/TableHeaders'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'
import PdfDocument from './components/PdfDocument'
import SubmitButton from './components/SubmitButton'
import PdfDocumentMake from './components/PdfDocumentMake'

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

const add = (a, b) => a + b

function App() {
  const { applianceGroups } = useData()

  const applianceList = () => {
    return Object.entries(applianceGroups)
      .map(([groupName, appliances]) => {
        return appliances.filter(({ quantity }) => quantity > 0)
      })
      .flat()
  }

  const justifyTable = useMediaQuery('(max-width:750px)')

  return (
    <>
      <ThemeProvider theme={theme}>
        <DataProvider>
          <Box
            backgroundColor={theme.palette.white.main}
            width="100vw"
            height="fit-content"
            pb={6}
          >
            <Box
              width="max-width"
              minHeight="50px"
              height="fit-content"
              pt={3}
              pb={1}
              sx={{
                display: 'flex',
                background: 'linear-gradient(to right, #005288 , #00A4E4)',
                justifyContent: 'center',
              }}
            >
              <Box backgroundColor="" width={800} height="fit-content">
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={theme.palette.white.main}
                  textAlign="left"
                  mx={2}
                >
                  Off-grid Load Calculator
                </Typography>
              </Box>
            </Box>

            <Box
              width="100vw"
              height="fit-content"
              sx={{
                display: 'flex',
                background: 'white',
                justifyContent: 'center',
              }}
            >
              <Box maxWidth={800} height="fit-content" backgroundColor="" my={4}>
                <Typography
                  color={theme.palette.black.main}
                  textAlign="left"
                  fontSize={18}
                  lineHeight={1.5}
                  variant="subtitle2"
                  mx={2}
                >
                  We want to help you calculate the system that’s right for you. Fill out
                  the table below to estimate energy usage. We’ve included some common
                  household appliances. Try to account for everything.
                  <br></br>
                  <br></br>
                  <strong>Section 1</strong>
                  <ul>
                    <li>Select the appliances that are in the home or business.</li>
                    <li>Use the plus or minus arrows to increase the number of units.</li>
                    <li>
                      Fill out ‘Watts’ - you can check this on the name plate of the
                      applicance.
                    </li>
                    <li>
                      Fill out ’hours’ - you can confirm this with the property occupants.
                    </li>
                    <li>
                      Select ‘More appliances’ for more options or to enter an applicance
                      not initially displayed.
                    </li>
                  </ul>
                  <br></br>
                  <strong>Section 2</strong>
                  <br></br>
                  <br></br>
                  Adjust the following values to meet the requirements of your project:
                  <ul>
                    <li>Percent of appliances on at once</li>
                    <li>Mid winter effective sun hours</li>
                    <li>Nominated battery depth of discharge</li>
                    <li>Nominated days of autonomy</li>
                  </ul>
                </Typography>
              </Box>
            </Box>

            <Box
              width="100vw"
              height="fit-content"
              sx={{
                display: 'flex',
                background: '',
                justifyContent: justifyTable ? 'left' : 'center',
                overflowX: 'auto',
                overflowY: 'hidden',
              }}
            >
              <Box width={750} height="fit-content">
                <TableHeaders />

                <Box
                  backgroundColor={theme.palette.light.main}
                  width={750}
                  height="fit-content"
                  px={4}
                  py={2}
                  sx={{ flexGrow: 1 }}
                >
                  {Object.entries(applianceGroups).map(
                    ([groupName, appliances], index) => (
                      <ApplianceGroup
                        key={`${groupName}-${index}`}
                        groupName={groupName}
                        appliances={appliances}
                      />
                    ),
                  )}
                </Box>

                <Summary />
              </Box>
            </Box>

            <SubmitButton />
            <PdfDocumentMake />
          </Box>
        </DataProvider>
      </ThemeProvider>
    </>
  )
}

// <Box mb={8}>
// <PDFDownloadLink document={<PdfDocument applianceGroups={applianceGroups} />} fileName="somename.pdf">
//   {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
// </PDFDownloadLink>

// <PDFViewer width="1000" height="600" className="app" >
//   <PdfDocument applianceGroups={applianceGroups} />
// </PDFViewer>
// </Box>

export default App
