import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import {MdVisibilityOff,MdVisibility} from "react-icons/md"

const Input = ({name,half,label,handleChange,autoFocus,type,handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={half?6:12}>
        <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name==="password" && {
            endAdornment:(
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        {type==="password"?<MdVisibility/>:<MdVisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            )
        }}
        />
    </Grid>
  )
}

export default Input
