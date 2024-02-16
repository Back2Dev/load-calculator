import React from 'react'
import { TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Item from './Item';



const ApplianceGroup = ({ groupName, appliances, handleModifyData, handleApplianceAdd, handleApplianceRefresh }) => {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={2} mt={2} mb={0}>
                <Grid xs={12} display="flex" justifyContent="left">
                    <Typography color='primary' variant='h6' sx={{ fontWeight: 'bold' }}>{groupName}</Typography>
                </Grid>
            </Grid>

            {
                appliances.map((appliance, index) => (
                    <Grid key={`${groupName}-${index}-${appliance.name}`} container rowSpacing={0} columnSpacing={2} mb={0.5}>
                        <Grid xs={5}><Item elevation={0} sx={{ display: 'flex', justifyContent: 'left', paddingLeft: '0.5rem' }}>{appliance.name}</Item></Grid>
                        <Grid xs={1.5}>
                            <TextField
                                size='small'
                                margin='none'
                                value={appliance.quantity}
                                onChange={(e) => handleModifyData(e, groupName, index, 'quantity')}
                                sx={{ border: 0, backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                            />
                        </Grid>
                        <Grid xs={1.5}>
                            <TextField
                                size='small'
                                margin='none'
                                value={appliance.watts}
                                onChange={(e) => handleModifyData(e, groupName, index, 'watts')}
                                sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                            />
                        </Grid>
                        <Grid xs={1.5}>
                            <TextField
                                size='small'
                                margin='none'
                                value={appliance.hours}
                                onChange={(e) => handleModifyData(e, groupName, index, 'hours')}
                                sx={{ backgroundColor: '#fff', "& .MuiOutlinedInput-input": { height: '1.25rem' } }}
                            />
                        </Grid>
                        <Grid xs={1.5}>
                            <Item elevation={0}>{appliance.total}</Item>
                        </Grid>
                        <Grid xs={1}>
                            {
                                (appliance.quantity === 0)
                                    ? <AddCircleIcon sx={{ color: '#005288', marginTop: '0.5rem' }} onClick={() => handleApplianceAdd(groupName, index)} />
                                    : <CancelIcon sx={{ color: '#BE1E2D', marginTop: '0.5rem' }} onClick={() => handleApplianceRefresh(groupName, index)} />
                            }
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}

export default ApplianceGroup
