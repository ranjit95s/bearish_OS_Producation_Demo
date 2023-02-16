import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import classes from "./CloudDriveTopbar.module.css"
import checkbox_unchecked from "../../../../../Images/Bearish/checkbox_unchecked.svg"
import checked_checkbox from "../../../../../Images/Bearish/checked-checkbox.svg"
import { Button, IconButton, Typography } from '@mui/material'
import category from "../../../../../Images/Bearish/category.svg"
import justify from "../../../../../Images/Bearish/justify.svg"
import { clsx } from "clsx"

const CloudDriveTopbar = ({ setGridView, headerName, gridView }) => {
    const [ckeckBox, setCheckBox] = useState(false)
    return (
        <Box className={classes.mainBox}>
            <Box className={classes.topBarContainer}>
                <Stack className={classes.leftContainer} >
                    <IconButton onClick={() => setCheckBox(!ckeckBox)} >
                        <img src={ckeckBox ? checked_checkbox : checkbox_unchecked} alt="ckeckBox" />
                    </IconButton>
                    <Typography className={classes.headingText} >{headerName}</Typography>
                </Stack>
                <Stack className={classes.viewBtnContainer} >
                    <Button className={clsx(gridView && classes.backgroundColor, classes.viewBtn)} onClick={() => setGridView(true)} >
                        <img src={category} alt="square" className={classes.viewbtnIcon} />
                        <Typography className={classes.viewBtnText}>Square View</Typography>
                    </Button>
                    <Button className={clsx(!gridView && classes.backgroundColor,  classes.viewBtn)} onClick={() => setGridView(false)} >
                        <img src={justify} alt="list" className={classes.viewbtnIcon} />
                        <Typography className={classes.viewBtnText}>List View</Typography>
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default CloudDriveTopbar
