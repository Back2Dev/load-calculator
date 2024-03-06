import { createContext, useContext, useReducer } from 'react'
import { ACTION, dataReducer, initialState } from './dataReducer'

const DataContext = createContext(initialState)

const add = (a, b) => a + b

const calculateDailyUsage = (currentState) => {
  return Object.values(currentState.applianceGroups)
    .map((appliances) => appliances.map((appliance) => appliance.total))
    .flat()
    .reduce(add)
}

const recalculateSummary = (currentState) => {
  // totalWatts aka totalLoad
  const dailyUsage = Number((calculateDailyUsage(currentState) / 1000).toFixed(2)) // convert to kW's
  const continuousLoad = Number((dailyUsage * (currentState.percentActive / 100)).toFixed(2))
  const usableBattery = Number((dailyUsage * currentState.doa).toFixed(2))
  const nameplate = Number((usableBattery / currentState.dod).toFixed(2))
  const minSolar = Number((dailyUsage / currentState.winterSunHours).toFixed(2))
  return { ...currentState, dailyUsage, continuousLoad, usableBattery, nameplate, minSolar }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)

  const addAppliance = (groupName, applianceIndex) => {
    console.log('addAppliance')
    const appliance = state.applianceGroups[groupName][applianceIndex]

    appliance['quantity'] = 1;
    appliance['total'] = appliance.quantity * appliance.watts * appliance.hours

    state.applianceGroups[groupName][applianceIndex] = { ...appliance }

    const { dailyUsage, continuousLoad, usableBattery, nameplate, minSolar } = recalculateSummary(state)

    dispatch({
      type: ACTION.ADD_APPLIANCE,
      payload: { ...state, dailyUsage, continuousLoad, usableBattery, nameplate, minSolar },
    })
  }

  const removeAppliance = (groupName, applianceIndex) => {
    console.log('removeAppliance')
    const appliance = state.applianceGroups[groupName][applianceIndex]

    appliance['quantity'] = 0
    appliance['total'] = 0

    state.applianceGroups[groupName][applianceIndex] = { ...appliance }

    const { dailyUsage, continuousLoad, usableBattery, nameplate, minSolar } = recalculateSummary(state)

    dispatch({
      type: ACTION.REMOVE_APPLIANCE,
      payload: { ...state, dailyUsage, continuousLoad, usableBattery, nameplate, minSolar },
    })
  }

  const updateAppliance = (groupName, applianceIndex, key, value) => {
    console.log('updateAppliance')
    console.log(groupName, applianceIndex, key, value)

    const appliance = state.applianceGroups[groupName][applianceIndex]

    appliance[key] = value
    appliance['total'] = appliance.quantity * appliance.watts * appliance.hours

    state.applianceGroups[groupName][applianceIndex] = { ...appliance }

    const { dailyUsage, continuousLoad, usableBattery, nameplate, minSolar } = recalculateSummary(state)

    dispatch({
      type: ACTION.UPDATE_APPLIANCE,
      payload: { ...state, dailyUsage, continuousLoad, usableBattery, nameplate, minSolar },
    })
  }


  const updateCalculationVariable = (variableName, value) => {
    state[variableName] = value

    const { dailyUsage, usableBattery, nameplate, minSolar } = recalculateSummary(state)

    dispatch({
      type: ACTION.UPDATE_CALCULATION_VARIABLE,
      payload: { ...state, dailyUsage, usableBattery, nameplate, minSolar },
    })

  }


  const value = {
    ...state,
    addAppliance,
    removeAppliance,
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
