import { defaultData } from './assets/defaultData'
import { cloneDeep } from 'lodash'

export const initialState = {
  applianceGroups: cloneDeep(defaultData), // editable -
  totalLoad: 0,
  dailyUsage: 0,
  continuousLoad: 0,
  percentActive: 80, // editable - percentage of appliances used at one time
  doa: 1, // editable -
  winterSunHours: 2, // editable -
  usableBattery: 0,
  dod: 0.8,
  nameplate: 0,
  minSolar: 0,
}

export const ACTION = {
  UPDATE_APPLIANCE: 'UPDATE_APPLIANCE',
  ADD_APPLIANCE: 'ADD_APPLIANCE',
  REMOVE_APPLIANCE: 'REMOVE_APPLIANCE',
  UPDATE_CALCULATION_VARIABLE: 'UPDATE_CALCULATION_VARIABLE',
}

export const dataReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTION.UPDATE_APPLIANCE:
      console.log('UPDATE_APPLIANCE')
      return { ...payload }

    case ACTION.ADD_APPLIANCE:
      console.log('ADD_APPLIANCE')
      return { ...payload }

    case ACTION.REMOVE_APPLIANCE:
      console.log('REMOVE_APPLIANCE')
      return { ...payload }

    case ACTION.UPDATE_CALCULATION_VARIABLE:
      console.log('UPDATE_CALCULATION_VARIABLE')
      return { ...payload }

    default:
      console.log('default')
      return state
  }
}
