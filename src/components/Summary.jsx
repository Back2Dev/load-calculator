import { TextField, Box, } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import InputAdornment from '@mui/material/InputAdornment';

import CancelIcon from '@mui/icons-material/Cancel';
import Item from './Item';
import { useData } from '../DataContext';
import { useTheme } from '@emotion/react';
import SummaryRow from './SummaryRow';


const RowSpacer = () => <Grid xs={12} my={0.5}></Grid>


const Summary = () => {

    const { totalLoad, dailyUsage, continuousLoad, percentActive, doa, winterSunHours, nameplate, minSolar, updateCalculationVariable } = useData()

    const handleUpdate = (e, variableName) => {
        const value = Number(e.target.value)
        updateCalculationVariable(variableName, value)

    }

    const theme = useTheme()

    return (
        <Box backgroundColor='#E4F1FB' width='800px' height='fit-content' p={4} sx={{ flexGrow: 1 }} mt={6}>
            <Grid container rowSpacing={1} columnSpacing={2}>

                <SummaryRow
                    description='Daily kWh usage'
                    value={dailyUsage}
                    keyName={'dailyUsage'}
                    suffix='kWh'
                />

                <SummaryRow
                    description='Peak load (total load)'
                    value={totalLoad}
                    keyName={'totalLoad'}
                    suffix='kWh'
                />

                <RowSpacer />

                <SummaryRow
                    description='Percent of appliances on at once'
                    value={percentActive}
                    keyName={'percentActive'}
                    defaultValue={80}
                    editable={true}
                    suffix='%'
                />

                <SummaryRow
                    description='Continuous load'
                    value={continuousLoad}
                    keyName={'continuousLoad'}
                    suffix='kW'
                />

                <RowSpacer />

                <SummaryRow
                    description='Mid winter effective sun hours'
                    value={winterSunHours}
                    keyName={'winterSunHours'}
                    suffix='hours'
                    defaultValue={2}
                    editable={true}
                />

                <SummaryRow
                    description='Minimum solar PV'
                    value={minSolar}
                    keyName={'minSolar'}
                    suffix='kW'
                />

                <RowSpacer />

                <SummaryRow
                    description='Days of Autonomy required'
                    value={doa}
                    keyName={'doa'}
                    suffix={doa > 1 ? 'days' : 'day'}
                    defaultValue={1}
                    editable={true}
                />

                <SummaryRow
                    description='Battery capacity at 80% DOC'
                    value={nameplate}
                    keyName={'nameplate'}
                    suffix='kWh'
                />

            </Grid>
        </Box>
    )
}

export default Summary
