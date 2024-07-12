import { Box, TextField, MenuItem } from '@mui/material'
import React, {useState} from 'react';

const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setCountries(typeof value ==='string' ? value.split(','): value)
    }

    console.log(countries);
    
  return (
    <Box width='250px'>
        <TextField 
            label='Select country' 
            select value={countries} 
            onChange={handleChange}
            fullWidth
            SelectProps={{
                multiple: true
            }}
            size='small'
            color='secondary'
            required
            error={countries.length === 0}
            helperText={countries.length === 0 ? 'Required' : 'Please select your country'}
           
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect