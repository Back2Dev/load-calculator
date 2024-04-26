import { createContext, useContext, useReducer } from 'react'
import { ACTION, dataReducer, initialState } from './dataReducer'

import { defaultData } from './assets/defaultData'
import { cloneDeep } from 'lodash'

const DataContext = createContext(initialState)

const add = (a, b) => a + b

const calculateDailyUsage = (currentState) => {
  return Object.values(currentState.applianceGroups)
    .map((appliances) => appliances.map((appliance) => appliance.total))
    .flat()
    .reduce(add)
}

const calculateTotalLoad = (currentState) => {
  return Object.values(currentState.applianceGroups)
    .map((appliances) => appliances.map(({ quantity, watts }) => quantity * watts))
    .flat()
    .reduce(add)
}

const recalculateSummary = (currentState) => {
  const totalLoad = Number((calculateTotalLoad(currentState) / 1000).toFixed(2))
  const dailyUsage = Number((calculateDailyUsage(currentState) / 1000).toFixed(2)) // convert to kW's
  const continuousLoad = Number((totalLoad * (currentState.percentActive / 100)).toFixed(2))
  const usableBattery = Number((dailyUsage * currentState.doa).toFixed(2))

  const depthOfDischarge = (currentState.dod / 100)

  const nameplate = Number((usableBattery / depthOfDischarge).toFixed(2))
  const minSolar = Number((dailyUsage / currentState.winterSunHours).toFixed(2))
  return { ...currentState, totalLoad, dailyUsage, continuousLoad, usableBattery, nameplate, minSolar }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)

  const addAppliance = (groupName, applianceIndex) => {
    console.log('addAppliance')
    const appliance = state.applianceGroups[groupName][applianceIndex]

    appliance['quantity'] += 1;
    appliance['total'] = appliance.quantity * appliance.watts * appliance.hours

    state.applianceGroups[groupName][applianceIndex] = { ...appliance }

    const { dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar } = recalculateSummary(state)

    dispatch({
      type: ACTION.ADD_APPLIANCE,
      payload: { ...state, dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar },
    })
  }

  const removeAppliance = (groupName, applianceIndex) => {
    console.log('removeAppliance')
    const appliance = state.applianceGroups[groupName][applianceIndex]

    appliance['quantity'] = (appliance.quantity > 1) ? (appliance.quantity - 1) : 0
    appliance['total'] = appliance.quantity * appliance.watts * appliance.hours

    state.applianceGroups[groupName][applianceIndex] = { ...appliance }

    const { dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar } = recalculateSummary(state)

    dispatch({
      type: ACTION.REMOVE_APPLIANCE,
      payload: { ...state, dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar },
    })
  }

  const resetAppliance = (groupName, applianceIndex) => {

    console.log('resetAppliance')

    const temp = cloneDeep(defaultData)

    const appliance = state.applianceGroups[groupName][applianceIndex]

    appliance['quantity'] = 0
    appliance['total'] = 0
    appliance['watts'] = temp[groupName][applianceIndex]['watts']
    appliance['hours'] = temp[groupName][applianceIndex]['hours']

    state.applianceGroups[groupName][applianceIndex] = { ...appliance }

    const { dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar } = recalculateSummary(state)

    dispatch({
      type: ACTION.REMOVE_APPLIANCE,
      payload: { ...state, dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar },
    })
  }

  const updateAppliance = (groupName, applianceIndex, key, value) => {
    console.log('updateAppliance')

    const appliance = state.applianceGroups[groupName][applianceIndex]

    appliance[key] = value
    appliance['total'] = appliance.quantity * appliance.watts * appliance.hours

    state.applianceGroups[groupName][applianceIndex] = { ...appliance }

    const { dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar } = recalculateSummary(state)

    dispatch({
      type: ACTION.UPDATE_APPLIANCE,
      payload: { ...state, dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar },
    })
  }


  const updateCalculationVariable = (variableName, value) => {
    console.log('updateCalculationVariable')

    state[variableName] = value

    const { dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar, dod } = recalculateSummary(state)

    dispatch({
      type: ACTION.UPDATE_CALCULATION_VARIABLE,
      payload: { ...state, dailyUsage, totalLoad, continuousLoad, usableBattery, nameplate, minSolar, dod },
    })

  }


  const value = {
    ...state,
    addAppliance,
    removeAppliance,
    resetAppliance,
    updateAppliance,
    updateCalculationVariable,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export const useData = () => {
  const context = useContext(DataContext)

  if (context === undefined) {
    throw new Error('useData must be within DataContext')
  }

  return context
}
