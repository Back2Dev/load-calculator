import React from 'react'

import { TextField, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Stack from '@mui/material/Stack'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

import Item from './Item'

import { useData } from '../DataContext'
import { useTheme } from '@mui/material/styles'

import SvgIcon from '@mui/material/SvgIcon'
import InputAdornment from '@mui/material/InputAdornment'

import {
  BathLaundryClothesDryer,
  BathLaundryExhaustFan,
  BathLaundryHairdryer,
  BathLaundryHeatedTowelRail,
  BathLaundryIron,
  BathLaundryRadiator,
  BathLaundryStraightner,
  BathLaundryWashingMachine,
  HouseholdAirCon,
  HouseholdBarOilHeater,
  HouseholdCeilingFan,
  HouseholdLamp,
  HouseholdLights,
  HouseholdPedestalFan,
  HouseholdSecuritySystem,
  HouseholdSewingMachine,
  HouseholdVaccumm,
  KitchenAirFryer,
  KitchenBeaters,
  KitchenBlender,
  KitchenCoffeeMachine,
  KitchenDishwasher,
  KitchenFreezer,
  KitchenKettle,
  KitchenLargeFridge,
  KitchenMediumFridge,
  KitchenMicrowave,
  KitchenOven,
  KitchenRangehood,
  KitchenSmallFridge,
  KitchenStoveTop,
  KitchenToaster,
  OfficeComputer,
  OfficeGamingConsole,
  OfficeLaptop,
  OfficeModem,
  OfficePrinter,
  OfficeSpeakers,
  OfficeTv,
  OfficeTelephone,
  OutdoorChainsaw,
  OutdoorPatioHeaterFreestanding,
  OutdoorPatioHeaterWall,
  OutdoorPondPump,
  OutdoorTennisCourtLight,
  UtilityElectricCar,
  UtilityHotWaterService,
  UtilityOutdoorLighting,
  UtilityPump,
  UtilitySlabHeating,
  UtilitySwimmingPool,
  WorkshopBatteryCharger,
  WorkshopBenchSaw,
  WorkshopCompressor,
  WorkshopDrillPress,
  WorkshopWelder,
} from './icons'

/**


const iconLookup = {
    'KitchenStoveTop': KitchenStoveTop,
    'KitchenOven': KitchenOven,
    'KitchenKettle': KitchenKettle,
    'KitchenToaster': KitchenToaster,
    'KitchenSmallFridge': KitchenSmallFridge,
    'KitchenFreezer': KitchenFreezer,
    'KitchenMicrowave': KitchenMicrowave,
    'KitchenDishwasher': KitchenDishwasher,
    'KitchenCoffeeMachine': KitchenCoffeeMachine,
    'KitchenRangehood': KitchenRangehood,
    'KitchenAirFryer': KitchenAirFryer,
    'BathLaundryClothesDryer': BathLaundryClothesDryer,
    'BathLaundryWashingMachine': BathLaundryWashingMachine,
    'BathLaundryIron': BathLaundryIron,
    'BathLaundryHairdryer': BathLaundryHairdryer,
    'BathLaundryHeatedTowelRail': BathLaundryHeatedTowelRail,
    'BathLaundryRadiator': BathLaundryRadiator,
    'OfficeTV': OfficeTv,
    'OfficeComputer': OfficeComputer,
    'OfficeModem': OfficeModem,
    'OfficeGamingConsole': OfficeGamingConsole,
    'UtilityOutdoorLighting': UtilityOutdoorLighting,
    'UtilitySlabHeating': UtilitySlabHeating,
    'UtilityHotWaterService': UtilityHotWaterService,
    'UtilitySwimmingPool': UtilitySwimmingPool,
    'UtilityPump': UtilityPump,
    'WorkshopCompressor': WorkshopCompressor,
    'WorkshopDrillPress': WorkshopDrillPress,
    'WorkshopWelder': WorkshopWelder,
    'WorkshopBatteryCharger': WorkshopBatteryCharger,
    'WorkshopBenchSaw': WorkshopBenchSaw,
    'OutdoorPondPump': OutdoorPondPump,
    'OutdoorPatioHeaterFreestanding': OutdoorPatioHeaterFreestanding,
    'OutdoorTennisCourtLight': OutdoorTennisCourtLight,
    'OutdoorChainsaw': OutdoorChainsaw,
}
 */

const iconLookup = {
  BathLaundryClothesDryer: BathLaundryClothesDryer,
  BathLaundryExhaustFan: BathLaundryExhaustFan,
  BathLaundryHairdryer: BathLaundryHairdryer,
  BathLaundryHeatedTowelRail: BathLaundryHeatedTowelRail,
  BathLaundryIron: BathLaundryIron,
  BathLaundryRadiator: BathLaundryRadiator,
  BathLaundryStraightner: BathLaundryStraightner,
  BathLaundryWashingMachine: BathLaundryWashingMachine,
  HouseholdAirCon: HouseholdAirCon,
  HouseholdBarOilHeater: HouseholdBarOilHeater,
  HouseholdCeilingFan: HouseholdCeilingFan,
  HouseholdLamp: HouseholdLamp,
  HouseholdLights: HouseholdLights,
  HouseholdPedestalFan: HouseholdPedestalFan,
  HouseholdSecuritySystem: HouseholdSecuritySystem,
  HouseholdSewingMachine: HouseholdSewingMachine,
  HouseholdVaccumm: HouseholdVaccumm,
  KitchenAirFryer: KitchenAirFryer,
  KitchenBeaters: KitchenBeaters,
  KitchenBlender: KitchenBlender,
  KitchenCoffeeMachine: KitchenCoffeeMachine,
  KitchenDishwasher: KitchenDishwasher,
  KitchenFreezer: KitchenFreezer,
  KitchenKettle: KitchenKettle,
  KitchenLargeFridge: KitchenLargeFridge,
  KitchenMediumFridge: KitchenMediumFridge,
  KitchenMicrowave: KitchenMicrowave,
  KitchenOven: KitchenOven,
  KitchenRangehood: KitchenRangehood,
  KitchenSmallFridge: KitchenSmallFridge,
  KitchenStoveTop: KitchenStoveTop,
  KitchenToaster: KitchenToaster,
  OfficeComputer: OfficeComputer,
  OfficeGamingConsole: OfficeGamingConsole,
  OfficeLaptop: OfficeLaptop,
  OfficeModem: OfficeModem,
  OfficePrinter: OfficePrinter,
  OfficeSpeakers: OfficeSpeakers,
  OfficeTv: OfficeTv,
  OfficeTelephone: OfficeTelephone,
  OutdoorChainsaw: OutdoorChainsaw,
  OutdoorPatioHeaterFreestanding: OutdoorPatioHeaterFreestanding,
  OutdoorPatioHeaterWall: OutdoorPatioHeaterWall,
  OutdoorPondPump: OutdoorPondPump,
  OutdoorTennisCourtLight: OutdoorTennisCourtLight,
  UtilityElectricCar: UtilityElectricCar,
  UtilityHotWaterService: UtilityHotWaterService,
  UtilityOutdoorLighting: UtilityOutdoorLighting,
  UtilityPump: UtilityPump,
  UtilitySlabHeating: UtilitySlabHeating,
  UtilitySwimmingPool: UtilitySwimmingPool,
  WorkshopBatteryCharger: WorkshopBatteryCharger,
  WorkshopBenchSaw: WorkshopBenchSaw,
  WorkshopCompressor: WorkshopCompressor,
  WorkshopDrillPress: WorkshopDrillPress,
  WorkshopWelder: WorkshopWelder,
}

const Appliance = ({ groupName, applianceIndex }) => {
  const {
    applianceGroups,
    updateAppliance,
    addAppliance,
    removeAppliance,
    resetAppliance,
  } = useData()

  const { name, quantity, watts, hours, total, id, icon } =
    applianceGroups[groupName][applianceIndex]

  const handleUpdate = (e, key) => {
    // const value = Number(e.target.value)
    const value = e.target.value.replace(/[^\d.]/g, '')

    updateAppliance(groupName, applianceIndex, key, value)
  }

  const theme = useTheme()

  const bigScreen = useMediaQuery('(min-width:750px)')

  return (
    <Grid container rowSpacing={0} columnSpacing={1.5} mb={0.75}>
      <Grid xs={5.0}>
        <TextField
          size="small"
          margin="none"
          value={name}
          data-cy={`${id}-qty`}
          fullWidth
          sx={{
            border: 0,
            backgroundColor: theme.palette.white.main,
            '& .MuiOutlinedInput-input': {
              height: '1.25rem',
              color: theme.palette.primary.main,
              textAlign: 'left',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SvgIcon component={iconLookup[icon]} sx={{ fontSize: 32 }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid xs={2}>
        <Stack spacing={1} direction="row">
          <RemoveCircleIcon
            data-cy={`${id}-add-btn`}
            sx={{
              color: theme.palette.primary.main,
              paddingTop: '0.375rem',
            }}
            onClick={() => removeAppliance(groupName, applianceIndex)}
          />
          <TextField
            size="small"
            margin="none"
            value={quantity}
            data-cy={`${id}-qty`}
            onChange={(e) => handleUpdate(e, 'quantity')}
            sx={{
              border: 0,
              backgroundColor: theme.palette.white.main,
              '& .MuiOutlinedInput-input': {
                height: '1.25rem',
                color: theme.palette.primary.main,
                textAlign: 'center',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
          />
          <AddCircleIcon
            data-cy={`${id}-add-btn`}
            sx={{
              color: theme.palette.primary.main,
              paddingTop: '0.375rem',
            }}
            onClick={() => addAppliance(groupName, applianceIndex)}
          />
        </Stack>
      </Grid>

      <Grid xs={1.5}>
        <TextField
          size="small"
          margin="none"
          value={watts}
          data-cy={`${id}-watts`}
          onChange={(e) => handleUpdate(e, 'watts')}
          sx={{
            backgroundColor: theme.palette.white.main,
            '& .MuiOutlinedInput-input': {
              height: '1.25rem',
              color: theme.palette.primary.main,
              textAlign: 'right',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />
      </Grid>

      <Grid xs={1.5}>
        <TextField
          size="small"
          margin="none"
          value={hours}
          onChange={(e) => handleUpdate(e, 'hours')}
          sx={{
            backgroundColor: theme.palette.white.main,
            '& .MuiOutlinedInput-input': {
              height: '1.25rem',
              color: theme.palette.primary.main,
              textAlign: 'center',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />
      </Grid>

      <Grid xs={1.5}>
        <TextField
          size="small"
          margin="none"
          value={total}
          sx={{
            backgroundColor: theme.palette.white.main,
            '& .MuiOutlinedInput-input': {
              height: '1.25rem',
              color: theme.palette.primary.main,
              textAlign: 'right',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />
      </Grid>

      <Grid xs={0.5}>
        {quantity > 0 ? (
          <CancelIcon
            sx={{
              color: theme.palette.danger.main,
              paddingTop: '0.375rem',
              marginLeft: '0.375rem',
            }}
            onClick={() => resetAppliance(groupName, applianceIndex)}
          />
        ) : null}
      </Grid>
    </Grid>
  )
}

export default Appliance
