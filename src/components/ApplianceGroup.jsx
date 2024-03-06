import React from 'react'
import { TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Item from './Item';
import Appliance from './Appliance';



const ApplianceGroup = ({ groupName, appliances, handleModifyData, handleApplianceAdd, handleApplianceRefresh }) => {

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={2} mt={2} mb={0}>
                <Grid xs={12} display="flex" justifyContent="left">
                    <Typography color='primary' variant='h6' sx={{ fontWeight: 'bold' }}>{groupName}</Typography>
                </Grid>
            </Grid>

            {
                appliances.map((appliance, applianceIndex) => (
                    <Appliance
                        key={`${groupName}-${applianceIndex}-${appliance.name}`}
                        {...appliance}
                        groupName={groupName}
                        applianceIndex={applianceIndex} />
                ))
            }
        </>
    )
}

export default ApplianceGroup
