import React from 'react'
import { TextField, Box, } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import InputAdornment from '@mui/material/InputAdornment';

import CancelIcon from '@mui/icons-material/Cancel';
import Item from './Item';
import { useData } from '../DataContext';
import { useTheme } from '@emotion/react';

import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';

const SummaryRow = ({ description, value, suffix, keyName, defaultValue, editable = false }) => {

    const { updateCalculationVariable } = useData()

    const handleUpdate = (e, variableName) => {
        const value = Number(e.target.value)
        updateCalculationVariable(variableName, value)

    }

    const theme = useTheme()

    const resetValue = () => updateCalculationVariable(keyName, defaultValue)

    return (

        <>
            <Grid xs={8}>
                <TextField
                    size='small'
                    margin='none'
                    value={description}
                    fullWidth
                    sx={{
                        border: 0,
                        backgroundColor: theme.palette.white.main,
                        "& .MuiOutlinedInput-input": {
                            height: '1.25rem',
                            color: theme.palette.primary.main,
                            textAlign: 'left',
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: 'none'
                        }
                    }}
                />
            </Grid>




            <Grid xs={2} xsOffset={1}>
                <TextField
                    size='small'
                    margin='none'
                    value={value}
                    onChange={editable ? (e) => handleUpdate(e, keyName) : null}
                    sx={{
                        backgroundColor: theme.palette.white.main,
                        "& .MuiOutlinedInput-input": {
                            height: '1.25rem',
                            color: theme.palette.primary.main,
                            textAlign: 'right',
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: 'none'
                        }
                    }}
                    InputProps={{
                        endAdornment: suffix
                            ? <InputAdornment
                                position="end"
                                sx={{
                                    color: theme.palette.primary.main
                                }}>
                                {suffix}
                            </InputAdornment>
                            : null
                    }}
                />
            </Grid>


            <Grid xs={1}>
                {
                    editable
                        ? <ReplayCircleFilledIcon
                            onClick={resetValue}
                            sx={{
                                color: theme.palette.secondary.main,
                                paddingTop: '0.375rem',
                                marginLeft: '-0.75rem'
                            }} />
                        : null
                }
            </Grid>

        </>

    )
}

export default SummaryRow
