import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { styled } from '@mui/material/styles';
import { TextField, Box, Paper, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import ApplianceGroup from './components/ApplianceGroup';
import Item from './components/Item';
import Summary from './components/Summary';

import { defaultData } from './assets/defaultData';


const defaultValues = {
  percentActive: 80, // percentage of appliances used at one time
  doa: 1,
  winterSunHours: 2,
  usableBattery: 0,
  dod: 0.8,
  nameplate: 0,
  minSolar: 0,
}


function App() {

  const [data, setData] = useState({ ...defaultData })

  const [calcValues, setCalcValues] = useState(defaultValues) // percent


  useEffect(() => {
    let temp = { ...defaultData }

    Object.entries(defaultData).forEach(([groupName, appliances]) => {
      appliances.forEach((appliance, index) => {
        temp[groupName][index]['total'] = appliance.quantity * appliance.watts * appliance.hours
        console.log(temp[groupName][index]['total'])
      })
    })

    setData(temp)
  }, [])

  useEffect(() => {
    const temp = { ...calcValues }
    temp.dailyUsage = Number((calculateDailyUsage() / 1000).toFixed(2)) // convert to kW's
    // calculate totals watts
    // multiply by percentage of appliances on factor = continuous load

    temp.usableBattery = Number((temp.dailyUsage * temp.doa).toFixed(2))
    temp.nameplate = Number((temp.usableBattery / temp.dod).toFixed(2))
    temp.minSolar = Number((temp.dailyUsage / temp.winterSunHours).toFixed(2))
    setCalcValues(temp)
  }, [data, calcValues])

  const calculateDailyUsage = () => {
    const add = (a, b) => a + b
    return Object.values(data)
      .map(appliances =>
        appliances.map(appliance =>
          appliance.total)).flat().reduce(add)
  }

  const handleUpdateCalcValue = (e, key) => {
    const value = e.target.value
    const temp = { ...calcValues }
    temp[key] = value
    setCalcValues(temp)
  }

  const handleModifyData = (e, groupName, index, key) => {
    const value = e.target.value
    const temp = { ...data }
    temp[groupName][index][key] = value

    const appliance = temp[groupName][index]
    temp[groupName][index]['total'] = appliance.quantity * appliance.watts * appliance.hours

    setData(temp)
  }

  const handleApplianceAdd = (groupName, index) => {
    console.log('handleApplianceAdd')
    const temp = { ...data }
    temp[groupName][index]['quantity'] = 1;
    setData(temp)
  }

  const handleApplianceRefresh = (groupName, index) => {
    console.log('handleApplianceRefresh')
    const temp = { ...data }

    const appliance1 = { ...defaultData[groupName][index] }
    const appliance2 = { ...data[groupName][index] }
    console.log({ appliance1, appliance2 })

    temp[groupName][index] = appliance1
    temp[groupName][index]['total'] = appliance1.quantity * appliance1.watts * appliance1.hours
    setData(temp)
  }

  return (
    <>
      <Typography variant='h4' my={5}>Load Calculator</Typography>

      <Box backgroundColor='#E4F1FB' width='800px' height='fit-content' p={4} sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={2}>
          <Grid xs={5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Appliance</Item></Grid>
          <Grid xs={1.5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Quantity</Item></Grid>
          <Grid xs={1.5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Watts</Item></Grid>
          <Grid xs={1.5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Hrs/Day</Item></Grid>
          <Grid xs={1.5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>W/Day</Item></Grid>

        </Grid>

        {
          Object.entries(data).map(([groupName, appliances], index) => (
            <ApplianceGroup
              key={`${groupName}-${index}`}
              groupName={groupName}
              appliances={appliances}
              handleModifyData={handleModifyData}
              handleApplianceAdd={handleApplianceAdd}
              handleApplianceRefresh={handleApplianceRefresh} />
          ))
        }

      </Box>


      <Summary calcValues={calcValues} handleUpdateCalcValue={handleUpdateCalcValue} />

    </>
  )
}

export default App
