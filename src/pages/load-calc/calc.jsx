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
// import logo from '.src/assets/icons/dpa-logo.png';
const debug = dbg('app:calc')

const Calc = ({ applianceGroups = {} }) => {
  const theme = useTheme()

  //const justifyTable = useMediaQuery('(max-width:750px)')
  const justifyTable = useMediaQuery('(max-width:100%)')

  return (
    <>
      {/* Body box */}
      <Box
        backgroundColor={theme.palette.white.main}
        width="100vw" // TODO: Don't use vw
        height="fit-content"
        pb={6}
      >
        {/* Blue banner */}
        <Box
          // width="max-width"
          minHeight="50px"
          height="fit-content"
          pt={3}
          pb={2}
          sx={{
            display: 'flex',
            background: 'linear-gradient(to right, #005288 , #00A4E4)',
            justifyContent: 'center',
          }}
        >
          {/* <Box backgroundColor="" width={800} height="fit-content"> */}
          <Box height="fit-content">
            {/* <img src={logo} alt="DPA Logo" /> */}
            <Typography
              variant="h4"
              fontWeight="bold"
              color={theme.palette.white.main}
              textAlign="left"
              mx={2}
            >
              Off-Grid Load Calculator
            </Typography>
          </Box>
        </Box>

        {/* Appliance Instructions */}
        <Box
          // width="100vw" // TODO: Don't use vw
          height="fit-content"
          sx={{
            display: 'flex',
            //background: 'white',
            justifyContent: 'center',
          }}
        >
          {/* </Box> <Box maxWidth={800} height="fit-content" my={4}> */}
          <Box height="fit-content" my={4}>
            <Typography
              color={theme.palette.black.main}
              textAlign="left"
              fontSize={18}
              lineHeight={1.5}
              mx={2}
            >
              We want to help you calculate the right system. Fill the table below to
              estimate energy usage. Try to account for everything. We already included
              common household appliances.
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
          // width="100vw"
          height="fit-content"
          sx={{
            display: 'flex',
            justifyContent: justifyTable ? 'left' : 'center',
            overflowX: 'auto',
            overflowY: 'hidden',
          }}
        >
          {/* <Box width={750} height="fit-content"> */}
          <Box height="fit-content">
            <TableHeaders />

            <Box
              backgroundColor={theme.palette.light.main}
              // width={750}
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

        {/* Summary instructions */}
        <Box
          // width="100vw" // TODO: Don't use vw
          height="fit-content"
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* </Box><Box maxWidth={800} height="fit-content" my={4}> */}
          <Box height="fit-content" my={4}>
            <Typography
              color={theme.palette.black.main}
              textAlign="left"
              fontSize={18}
              lineHeight={1.5}
              mx={2}
            >
              Adjust the following values to meet the requirements of your project:
              <ol>
                <li>Percent of appliances on at once</li>
                <li>Mid winter effective sun hours</li>
                <li>Nominated battery depth of discharge</li>
                <li>Nominated days of autonomy</li>
              </ol>
            </Typography>
          </Box>
        </Box>

        {/* Summary table */}
        <Box
          // width="100vw"
          height="fit-content"
          sx={{
            display: 'flex',
            justifyContent: justifyTable ? 'left' : 'center',
            overflowX: 'auto',
            overflowY: 'hidden',
          }}
        >
          {/* <Box width={750} height="fit-content"> */}
          <Box height="fit-content">
            <SummaryHeader />

            <Box
              backgroundColor={theme.palette.light.main}
              // width={750}
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
          // width="100vw" // TODO: Don't use vw
          height="fit-content"
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <Box maxWidth={800} height="fit-content" my={4}> */}
          <Box height="fit-content" my={4}></Box>
        </Box>

        {/* Contact Table */}
        <Box
          // width="100vw"
          height="fit-content"
          sx={{
            display: 'flex',
            justifyContent: justifyTable ? 'left' : 'center',
            overflowX: 'auto',
            overflowY: 'hidden',
          }}
        >
          {/* <Box width={750} height="fit-content"> */}
          <Box height="fit-content">
            <ContactHeader />

            <Box
              backgroundColor={theme.palette.light.main}
              // width={750}
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
