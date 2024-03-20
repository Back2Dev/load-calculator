import { TextField, Box, } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import InputAdornment from '@mui/material/InputAdornment';

import CancelIcon from '@mui/icons-material/Cancel';
import Item from './Item';
import { useData } from '../DataContext';



const Summary = () => {

    const { totalLoad, dailyUsage, continuousLoad, percentActive, doa, winterSunHours, nameplate, minSolar, updateCalculationVariable } = useData()

    const handleUpdate = (e, variableName) => {
        const value = Number(e.target.value)
        updateCalculationVariable(variableName, value)

    }

    return (
        <Box backgroundColor='#E4F1FB' width='800px' height='fit-content' p={4} sx={{ flexGrow: 1 }} mt={6}>
            <Grid container rowSpacing={1} columnSpacing={2}>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Daily kWh usage</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={dailyUsage}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kWh</InputAdornment>
                        }}
                    />
                </Grid>
                <Grid xs={1}></Grid>
                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Peak load (total load)</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={totalLoad}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kW</InputAdornment>
                        }}
                    />
                </Grid>
                <Grid xs={1}></Grid>


                <Grid xs={12} my={0.5}></Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Percent of appliances on at once</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={percentActive}
                        onChange={(e) => handleUpdate(e, 'percentActive')}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>
                        }}
                    />
                </Grid>
                <Grid xs={1}>
                    <CancelIcon sx={{ color: '#005288' }} />
                </Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Continuous load</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={continuousLoad}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kW</InputAdornment>
                        }}
                    />
                </Grid>
                <Grid xs={1}></Grid>

                <Grid xs={12} my={0.5}></Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Mid winter effective sun hours</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={winterSunHours}
                        onChange={(e) => handleUpdate(e, 'winterSunHours')}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">hours</InputAdornment>
                        }}
                    />
                </Grid>
                <Grid xs={1}>
                    <CancelIcon sx={{ color: '#005288' }} />
                </Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Minimum solar PV</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={minSolar}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kW</InputAdornment>
                        }}
                    />
                </Grid>
                <Grid xs={1}></Grid>

                <Grid xs={12} my={0.5}></Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Days of Autonomy required</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={doa}
                        onChange={(e) => handleUpdate(e, 'doa')}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{doa > 1 ? 'days' : 'day'}</InputAdornment>
                        }}
                    />
                </Grid>
                <Grid xs={1}>
                    <CancelIcon sx={{ color: '#005288' }} />
                </Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Battery capacity at 80% DOC</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={nameplate}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kWh</InputAdornment>
                        }}
                    />
                </Grid>
                <Grid xs={1}></Grid>

            </Grid>
        </Box>
    )
}

export default Summary
