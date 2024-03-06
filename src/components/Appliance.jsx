import React from 'react'
import { TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Item from './Item';
import { useData } from '../DataContext';



const Appliance = ({ groupName, applianceIndex }) => {

    const { applianceGroups, updateAppliance, addAppliance, removeAppliance } = useData();

    const { name, quantity, watts, hours, total, id } = applianceGroups[groupName][applianceIndex]

    const handleUpdate = (e, key) => {
        const value = Number(e.target.value)
        updateAppliance(groupName, applianceIndex, key, value)
    }

    return (

        <Grid container rowSpacing={0} columnSpacing={2} mb={0.5}>
            <Grid xs={5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>{name}</Item></Grid>
            <Grid xs={1.5}>
                <TextField
                    size='small'
                    margin='none'
                    value={quantity}
                    data-cy={`${id}-qty`}
                    onChange={(e) => handleUpdate(e, 'quantity')}
                    sx={{ border: 0, backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                />
            </Grid>
            <Grid xs={1.5}>
                <TextField
                    size='small'
                    margin='none'
                    value={watts}
                    data-cy={`${id}-watts`}
                    onChange={(e) => handleUpdate(e, 'watts')}
                    sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                />
            </Grid>
            <Grid xs={1.5}>
                <TextField
                    size='small'
                    margin='none'
                    value={hours}
                    onChange={(e) => handleUpdate(e, 'hours')}
                    sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                />
            </Grid>
            <Grid xs={1.5}>
                <Item elevation={0}>{total}</Item>
            </Grid>
            <Grid xs={1}>
                {
                    (quantity === 0)
                        ? <AddCircleIcon data-cy={`${id}-add-btn`} sx={{ color: '#005288', marginTop: '0.5rem' }} onClick={() => addAppliance(groupName, applianceIndex)} />
                        : <CancelIcon sx={{ color: '#BE1E2D', marginTop: '0.5rem' }} onClick={() => removeAppliance(groupName, applianceIndex)} />
                }
            </Grid>
        </Grid>


    )
}

export default Appliance
