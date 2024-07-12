import React from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';

const MuiTextfield = () => {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='name'
                    variant='outlined'
                />
                <TextField
                    label='name'
                    variant='filled'
                />
                <TextField
                    label='name'
                    variant='standard'
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Small secondary'
                    size='small'
                    color='secondary'
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Form Input'
                    size='medium'
                    color='secondary'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    required
                    error={!value}
                    helperText={!value ? 'Required' : 'Do not show your password with anyone'}
                />
                <TextField
                    label='Password'
                    type='password'
                    helperText="Do not share your password with anyone"
                />
                <TextField
                    label='Read only'
                    InputProps={{readOnly:true}}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField 
                    label='amount' 
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                    }}
                />
                <TextField 
                    label='weight' 
                    type='number'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
                    }}
                />
            </Stack>
        </Stack>
    )
}

export default MuiTextfield