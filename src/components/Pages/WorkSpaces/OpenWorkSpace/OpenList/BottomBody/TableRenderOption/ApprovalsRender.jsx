import { Menu, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import multiselect from "../../../../../../../Images/Bearish/multiselect.svg"
import ApprovalDropDown from '../../../../../../Common/ApprovalDropDown/ApprovalDropDown'
import classes from "./ApprovalsRender.module.css"

const ApprovalsRender = () => {
    const [dropDown, setDropDown] = useState(false)
    const isOpenDropDown = Boolean(dropDown);

    const handleClose = () => {
        setDropDown(null);
    };

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.containerFlex} onClick={(event) => setDropDown(event.currentTarget)} >
                <img src={multiselect} alt="multiselect" className={classes.approvIcon} />
                <Typography className={classes.Typography}>
                    Add Approvals
                </Typography>
            </Box>
            <Menu
                open={isOpenDropDown}
                anchorEl={dropDown}
                PaperProps={{
                    style: {
                        width: "150px",
                        height: "auto"
                    }
                }}
                onClose={handleClose}>
                <ApprovalDropDown />
            </Menu>
        </Box>
    )
}

export default ApprovalsRender
