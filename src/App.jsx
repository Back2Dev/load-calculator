import { useEffect, useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { styled } from '@mui/material/styles';
import { TextField, Box, Paper, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import ApplianceGroup from './components/ApplianceGroup';
import Item from './components/Item';
import Summary from './components/Summary';

import { defaultData } from './assets/defaultData';

import { cloneDeep } from 'lodash';

const add = (a, b) => a + b




const defaultValues = {
  percentActive: 80, // percentage of appliances used at one time
  maxLoad: 0,
  continuousLoad: 0,
  doa: 1,
  winterSunHours: 2,
  usableBattery: 0,
  dod: 0.8,
  nameplate: 0,
  minSolar: 0,
}


function App() {

  const [data, setData] = useState(cloneDeep(defaultData))
  const calcValues = useRef(cloneDeep(defaultValues))

  const dailyUsage = useRef(0)
  const percentActive = useRef(80)
  const maxLoad = useRef(0)
  const continuousLoad = useRef(0)
  const doa = useRef(1)
  const winterSunHours = useRef(2)
  const usableBattery = useRef(0)
  const dod = useRef(8)
  const nameplate = useRef(0)
  const minSolar = useRef(0)

  useEffect(() => {
    let temp = cloneDeep(defaultData)

    Object.entries(defaultData).forEach(([groupName, appliances]) => {
      appliances.forEach((appliance, index) => {
        temp[groupName][index]['total'] = appliance.quantity * appliance.watts * appliance.hours
        console.log(temp[groupName][index]['total'])
      })
    })

    setData(temp)
  }, [])

  useEffect(() => {
    console.log('updated?', defaultData['Kitchen'][0])
  }, [defaultData])


  useEffect(() => {

    // const temp = cloneDeep(calcValues)
    dailyUsage.current = Number((calculateDailyUsage() / 1000).toFixed(2)) // convert to kW's
    // calculate totals watts
    // multiply by percentage of appliances on factor = continuous load

    maxLoad.current = calculateMaxLoad()
    continuousLoad.current = maxLoad.current * (percentActive.current / 100)

    usableBattery.current = Number((dailyUsage.current * doa.current).toFixed(2))
    nameplate.current = Number((usableBattery.current / dod.current).toFixed(2))
    minSolar.current = Number((dailyUsage.current / winterSunHours.current).toFixed(2))

    // setCalcValues(temp)
  }, [data])

  const calculateDailyUsage = () => {
    return Object.values(data)
      .map(appliances =>
        appliances.map(appliance =>
          appliance.total)).flat().reduce(add)
  }

  const calculateMaxLoad = () => {
    return Object.values(data)
      .map(appliances =>
        appliances.map(({ quantity, watts }) =>
          quantity * watts)).flat().reduce(add)
  }

  const handleUpdateCalcValue = (e, key) => {
    const value = e.target.value;
    calcValues.current[key] = value;
  }

  const handleModifyData = (e, groupName, index, key) => {
    const value = e.target.value

    const temp = cloneDeep(data)
    temp[groupName][index][key] = value

    const { quantity, watts, hours } = temp[groupName][index]
    temp[groupName][index]['total'] = quantity * watts * hours

    setData(temp)
  }

  const handleApplianceAdd = (groupName, index) => {
    const temp = cloneDeep(data)
    temp[groupName][index]['quantity'] = 1;

    const { quantity, watts, hours } = temp[groupName][index]
    temp[groupName][index]['total'] = quantity * watts * hours

    setData(temp)
  }

  const handleApplianceRefresh = (groupName, index) => {
    console.log('handleApplianceRefresh')
    const temp = cloneDeep(data)

    const appliance1 = cloneDeep(defaultData)[groupName][index]
    const appliance2 = cloneDeep(data)[groupName][index]
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


      <Summary handleUpdateCalcValue={handleUpdateCalcValue}
        dailyUsage={dailyUsage}
        percentActive={percentActive}
        maxLoad={maxLoad}
        continuousLoad={continuousLoad}
        doa={doa}
        winterSunHours={winterSunHours}
        usableBattery={usableBattery}
        dod={dod}
        nameplate={nameplate}
        minSolar={minSolar}
      />

    </>
  )
}

export default App
