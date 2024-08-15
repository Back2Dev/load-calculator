import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import dbg from 'debug'
import ApplianceGroup from './components/ApplianceGroup'
import Summary from './components/Summary'
import TableHeaders from './components/TableHeaders'
import SummaryHeader from './components/SummaryHeader'
import ContactForm from './components/ContactForm'
import ContactHeader from './components/ContactHeader'
import SubmitButton from './components/SubmitButton'
import './styles.css'
const debug = dbg('app:calc')

const Calc = ({ applianceGroups = {} }) => {
  const theme = useTheme()

  //const justifyTable = useMediaQuery('(max-width:750px)')
  const justifyTable = useMediaQuery('(max-width:100%)')

  return (
    <>
      {/* Body box */}
      <Box backgroundColor={theme.palette.white.main} pb={3}>
        {/* Blue banner */}
        <Box
          minHeight="50px"
          pt={3}
          pb={2}
          sx={{
            display: 'flex',
            background: 'linear-gradient(to right, #005288 , #00A4E4)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="/images/dpa-solar-logo-small.png"
            alt="DPA Logo"
            style={{ marginRight: '2rem', width: '64PX' }}
          />
          <Typography
            variant="h4"
            fontWeight="bold"
            color={theme.palette.white.main}
            textAlign="left"
          >
            Off-Grid Load Calculator
          </Typography>
        </Box>

        {/* Appliance Instructions */}
        <Box
          maxWidth="800px"
          sx={{
            display: 'flex',
            margin: 'auto',
          }}
        >
          <Box height="fit-content" my={4}>
            <Typography
              color={theme.palette.black.main}
              textAlign="left"
              fontSize={18}
              lineHeight={1.5}
              mx={2}
            >
              We want to help you build the right system. Our calculator is divided in 3
              sections: Appliances, Consumption, and Contact. Fill the tables below to
              estimate your energy usage - try to account for everything. We already
              included common household appliances.
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
              <ol>
                <li>
                  Select the electrical appliances that are in the home or business.
                </li>
                <li>Use the plus or minus arrows to increase the number of units.</li>
                <li>
                  Fill out ‘Watts’ - you can check this on the name plate of the
                  appliance.
                </li>
                <li>
                  Fill out ’hours’ - you can confirm this with the property occupants.
                </li>
                <li>Select ‘More appliances’ for more options.</li>
              </ol>
            </Typography>
          </Box>
        </Box>

        {/* Appliance table */}
        <Box
          height="fit-content"
          maxWidth="900px"
          sx={{
            display: 'flex',
            justifyContent: justifyTable ? 'left' : 'center',
            overflowX: 'auto',
            overflowY: 'hidden',
            margin: 'auto',
          }}
        >
          <Box height="fit-content">
            <TableHeaders />

            <Box
              backgroundColor={theme.palette.light.main}
              height="fit-content"
              px={4}
              py={2}
              sx={{ flexGrow: 1 }}
            >
              {/* Rows */}
              {Object.entries(applianceGroups).map(([groupName, appliances], index) => (
                <ApplianceGroup
                  key={`${groupName}-${index}`}
                  groupName={groupName}
                  appliances={appliances}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Summary table */}
        <Box
          height="fit-content"
          maxWidth="900px"
          sx={{
            display: 'flex',
            justifyContent: justifyTable ? 'left' : 'center',
            overflowX: 'auto',
            overflowY: 'hidden',
            margin: 'auto',
          }}
        >
          <Box height="fit-content">
            <SummaryHeader />

            <Box
              backgroundColor={theme.palette.light.main}
              height="fit-content"
              px={4}
              py={1}
              sx={{ flexGrow: 1 }}
            >
              <Summary />
            </Box>
          </Box>
        </Box>

        {/* Contact Form */}
        <Box
          maxWidth="800px"
          sx={{
            display: 'flex',
            margin: 'auto',
          }}
        >
          <Box height="fit-content" my={4}></Box>
        </Box>

        {/* Contact Table */}
        <Box
          height="fit-content"
          maxWidth="900px"
          sx={{
            display: 'flex',
            justifyContent: justifyTable ? 'left' : 'center',
            overflowX: 'auto',
            overflowY: 'hidden',
            margin: 'auto',
          }}
        >
          <Box height="fit-content">
            <ContactHeader />

            <Box
              backgroundColor={theme.palette.light.main}
              height="fit-content"
              px={4}
              py={2}
              sx={{ flexGrow: 1 }}
            >
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Box>

      <SubmitButton />
    </>
  )
}

export default Calc
