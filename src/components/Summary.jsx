import { TextField, Box, } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import CancelIcon from '@mui/icons-material/Cancel';
import Item from './Item';



const Summary = ({
    dailyUsage,
    percentActive,
    maxLoad,
    continuousLoad,
    doa,
    winterSunHours,
    usableBattery,
    dod,
    nameplate,
    minSolar,
}) => {

    const handleUpdateRef = (e, ref) => {
        console.log('handleUpdateRef')
        console.log(e, ref)
    }

    return (
        <Box backgroundColor='#E4F1FB' width='800px' height='fit-content' p={4} sx={{ flexGrow: 1 }} mt={6}>
            <Grid container rowSpacing={1} columnSpacing={2}>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Daily kWh usage</Item></Grid>
                <Grid xs={2} xsOffset={1}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>{dailyUsage.current}</Item></Grid>
                <Grid xs={1}></Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Mid winter effective sun hours</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={winterSunHours.current}
                        onChange={(e) => { winterSunHours.current = Number(e.target.value) }}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                    />
                </Grid>
                <Grid xs={1}>
                    <CancelIcon sx={{ color: '#005288' }} />
                </Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Minimum solar PV</Item></Grid>
                <Grid xs={2} xsOffset={1}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>{minSolar.current}kW</Item></Grid>
                <Grid xs={1}></Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Percet of appliances on at once</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={percentActive.current}
                        onChange={(e) => { percentActive.current = Number(e.target.value) }}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                    />
                </Grid>
                <Grid xs={1}>
                    <CancelIcon sx={{ color: '#005288' }} />
                </Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Continuous load</Item></Grid>
                <Grid xs={2} xsOffset={1}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>{continuousLoad.current}</Item></Grid>
                <Grid xs={1}></Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Days of Autonomy required</Item></Grid>
                <Grid xs={2} xsOffset={1}>
                    <TextField
                        size='small'
                        margin='none'
                        value={doa.current}
                        onChange={(e) => { doa.current = Number(e.target.value) }}
                        sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                    />
                </Grid>
                <Grid xs={1}>
                    <CancelIcon sx={{ color: '#005288' }} />
                </Grid>

                <Grid xs={8}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>Battery capacity at 80% DOC</Item></Grid>
                <Grid xs={2} xsOffset={1}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>{nameplate.current}kWh</Item></Grid>
                <Grid xs={1}></Grid>

            </Grid>
        </Box>
    )
}

export default Summary
