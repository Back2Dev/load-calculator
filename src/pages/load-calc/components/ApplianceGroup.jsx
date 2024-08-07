import React from 'react'
import { useEffect, useRef, useState } from 'react'

import { TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Item from './Item';
import Appliance from './Appliance';
import Collapse from '@mui/material/Collapse';

import { useTheme } from '@mui/material/styles';


const MINIMUM_APPLIANCES_DISPLAYED = 5


const ApplianceGroup = ({ groupName, appliances }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open)

    const theme = useTheme();


    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={2} mt={3} mb={0}>
                <Grid xs={12} display="flex" justifyContent="left">
                    <Typography color={theme.palette.secondary.main} variant='h6' sx={{ fontWeight: 'bold' }}>
                        {groupName}
                    </Typography>
                </Grid>
            </Grid>

            {
                appliances.slice(0, MINIMUM_APPLIANCES_DISPLAYED).map((appliance, applianceIndex) => (
                    <Appliance
                        key={`${groupName}-${applianceIndex}-${appliance.name}`}
                        {...appliance}
                        groupName={groupName}
                        applianceIndex={applianceIndex} />
                ))
            }

            <Collapse in={open} timeout="auto" unmountOnExit>

                {
                    (appliances.length > MINIMUM_APPLIANCES_DISPLAYED)
                        ? appliances.slice(MINIMUM_APPLIANCES_DISPLAYED).map((appliance, applianceIndex) => (
                            <Appliance
                                key={`${groupName}-${applianceIndex + MINIMUM_APPLIANCES_DISPLAYED}-${appliance.name}`}
                                {...appliance}
                                groupName={groupName}
                                applianceIndex={applianceIndex + MINIMUM_APPLIANCES_DISPLAYED} />
                        ))
                        : null
                }

            </Collapse>

            <Grid container rowSpacing={1} columnSpacing={2} mt={2} mb={0}>
                <Grid xs={12} display="flex" justifyContent="left">
                    {
                        (appliances.length > MINIMUM_APPLIANCES_DISPLAYED)
                            ? open
                                ? <Typography color={theme.palette.primary.main} variant='subtitle2' sx={{ fontWeight: 'bold', marginTop: '-0.75rem', marginLeft: '1.5rem' }} onClick={handleClick}>- Less appliances</Typography>
                                : <Typography color={theme.palette.primary.main} variant='subtitle2' sx={{ fontWeight: 'bold', marginTop: '-0.75rem', marginLeft: '0.5rem' }} onClick={handleClick}>+ More appliances</Typography>
                            : null
                    }
                </Grid>
            </Grid>


        </>
    )
}

export default ApplianceGroup
