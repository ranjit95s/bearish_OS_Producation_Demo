import React from 'react'
import {Box, Stack} from '@mui/material'
import classes from "./CreateWorkSpace.module.css";

const CreateWorkSpace = () => {
    return (
        <Box    >
            <Stack sx={{padding: "16px", gap: '10px'}}>
                <Stack className={classes.inputMain}>
                    <input className={classes.input} type='text' placeholder='Name your Workspace'/>
                </Stack>
                <Stack sx={{
                    backgroundColor: '#5ee2a042',
                    justifyContent: 'center',
                    height: '25px',
                    width: '100px',
                    alignItems: 'center',
                    borderRadius: '5px',
                    marginLeft: "auto",
                    fontFamily: 'Source Serif Pro'
                }}>
                    Create
                </Stack>
            </Stack>
        </Box>
    )
};

export default CreateWorkSpace
