import React from 'react'
import { Button, Popover, Stack, Typography } from '@mui/material'
import classes from './FolderMenu.module.css'

const FolderMenu = ({ id, isOpen, open, handleClose }) => {
    return (
        <Popover
            id={id}
            open={isOpen}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 400,
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            menuStyle={{ boxShadow: 'none' }}
            PaperProps={{
                style: { width: '226px', height: "76px", padding: "10px", border: "3px solid #E9EDF2" },
            }}
        >
            <Stack>
                <input type="text" placeholder='Name Your Folder' className={classes.inpuerInnerText} />
                <Button className={classes.createnewText}>
                    <Typography>Create Now</Typography>
                </Button>
            </Stack>
        </Popover>
    )
}

export default FolderMenu
