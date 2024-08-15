import { defaultData } from './defaultData'
import { cloneDeep } from 'lodash'
import dbg from 'debug'
const debug = dbg('app:reducer')

export const initialState = {
  applianceGroups: cloneDeep(defaultData), // editable -
  totalLoad: 0,
  dailyUsage: 0,
  continuousLoad: 0,
  percentActive: 80, // editable - percentage of appliances used at one time
  doa: 2, // editable -
  winterSunHours: 2, // editable -
  usableBattery: 0,
  dod: 80,
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
      debug('UPDATE_APPLIANCE', payload)
      return { ...payload }

    case ACTION.ADD_APPLIANCE:
      debug('ADD_APPLIANCE', payload)
      return { ...payload }

    case ACTION.REMOVE_APPLIANCE:
      debug('REMOVE_APPLIANCE', payload)
      return { ...payload }

    case ACTION.UPDATE_CALCULATION_VARIABLE:
      debug('UPDATE_CALCULATION_VARIABLE', payload)
      return { ...payload }

    default:
      debug('Unsupported action.type (SHOULD NEVER HAPPEN)', payload)
      return state
  }
}
