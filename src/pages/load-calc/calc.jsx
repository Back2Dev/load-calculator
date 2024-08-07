import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import dbg from 'debug'
import ApplianceGroup from './components/ApplianceGroup'
import Summary from './components/Summary'
import TableHeaders from './components/TableHeaders'
import PdfDocumentMake from './components/PdfDocumentMake'
import SubmitButton from './components/SubmitButton'
import './styles.css'
const debug = dbg('app:calc')

const Calc = ({ applianceGroups = {} }) => {
  const theme = useTheme()

  const justifyTable = useMediaQuery('(max-width:750px)')

  return (
    <>
      <Box
        backgroundColor={theme.palette.white.main}
        width="100vw" // TODO: Don't use vw
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
          width="100vw" // TODO: Don't use vw
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
              // variant="subtitle2"
              mx={2}
            >
              We want to help you calculate the system that’s right for you. Fill out the
              table below to estimate energy usage. We’ve included some common household
              appliances. Try to account for everything.
            </Typography>
            <Typography
              color={theme.palette.black.main}
              textAlign="left"
              fontSize={18}
              lineHeight={1.5}
              variant="h3"
              component="h3"
              mx={2}
            >
              Section 1
            </Typography>
            <ul>
              <li>Select the electrical appliances that are in the home or business.</li>
              <li>Use the plus or minus arrows to increase the number of units.</li>
              <li>
                Fill out ‘Watts’ - you can check this on the name plate of the appliance.
              </li>
              <li>
                Fill out ’hours’ - you can confirm this with the property occupants.
              </li>
              <li>
                Select ‘More appliances’ for more options or to enter an appliance not
                initially displayed.
              </li>
            </ul>
            <h3>Section 2</h3>
            <Typography
              color={theme.palette.black.main}
              textAlign="left"
              fontSize={18}
              lineHeight={1.5}
              // variant="subtitle2"
              mx={2}
            >
              Adjust the following values to meet the requirements of your project:
            </Typography>
            <ul>
              <li>Percent of appliances on at once</li>
              <li>Mid winter effective sun hours</li>
              <li>Nominated battery depth of discharge</li>
              <li>Nominated days of autonomy</li>
            </ul>
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
              {Object.entries(applianceGroups).map(([groupName, appliances], index) => (
                <ApplianceGroup
                  key={`${groupName}-${index}`}
                  groupName={groupName}
                  appliances={appliances}
                />
              ))}
            </Box>

            <Summary />
          </Box>
        </Box>

        <SubmitButton />
        <PdfDocumentMake />
      </Box>
    </>
  )
}

export default Calc
