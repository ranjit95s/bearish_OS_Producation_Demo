import { Divider, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import classes from "./WikiMenu.module.css"
import close_circled from "../../../Images/Bearish/close_circled.svg"
import edit from "../../../Images/Bearish/edit.svg"
import sort_decending from "../../../Images/Bearish/sort_decending.svg"
import trash_Red from "../../../Images/Bearish/trash_Red.svg"

const WikiMenu = ({ handleClose }) => {
    return (
        <Box>
            <Box className={classes.header}>
                <Typography className={classes.headerName} >Menu</Typography>
                <IconButton onClick={handleClose} className={classes.closebtn} >
                    <img src={close_circled} alt="" className={classes.closebtn} />
                </IconButton>
            </Box>
            <Divider />
            <Box className={classes.optContainer}>
                <Box className={classes.btnContainer}>
                    <img src={edit} alt="" className={classes.optIcon} />
                    <Typography className='optionTypo' >Rename</Typography>
                </Box>
                <Box className={classes.btnContainer}>
                    <img src={sort_decending} alt="" className={classes.optIcon} />
                    <Typography className='optionTypo'>Sort A/Z</Typography>
                </Box>
                <Box className={classes.btnContainer}>
                    <img src={trash_Red} alt="" className={classes.optIcon} />
                    <Typography className='optionTypo'>Delete</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default WikiMenu
