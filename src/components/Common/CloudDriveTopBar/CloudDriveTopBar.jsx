import { Button, Menu, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ColorPicker from '../ColorPicker/ColorPicker'
import classes from "./CloudDriveTopBar.module.css"
import parsonGreenicon from "../../../Images/Bearish/parsonGreenicon.svg"
import Light_arrow_backward from "../../../Images/Bearish/chevron_backward.svg"
import parsone from "../../../Images/Bearish/parsonGreenicon.svg"
import editLogo from "../../../Images/Bearish/Light_edit.svg"
import Trash from "../../../Images/Bearish/trashRedIcon.svg"
import Analytics from "../../../Images/Bearish/trending_up.svg"
import Comments from "../../../Images/Bearish/full_smiley.svg"
import colorPicker from "../../../Images/Bearish/eye_dropper_blue.svg"
import WorkSpaceDrawer from '../WorkSpaceMenu/WorkSpaceDrawer'
import Combined from "../../../Images/Bearish/Combined Shape.svg"

const ListdrawOptions = [
    {
        name: "Share Now",
        icon: parsone,
    },
    {
        name: "Rename",
        icon: editLogo,
    },
    {
        name: "Item Color",
        icon: colorPicker,
    },
    {
        name: "Analytics",
        icon: Analytics,
    },
    {
        name: "Comments",
        icon: Comments,
    },
    {
        name: "Delete",
        icon: Trash,
    },
];

const CloudDriveTopBar = ({ headerName }) => {
    const [colorPicker, setColorPicker] = useState(false)
    const [selectColor, setSelectColor] = useState("#fff")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isPickerOpen = Boolean(colorPicker);
    const handleClose = () => {
        setColorPicker(null);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <Box className={classes.mainBoxBg} sx={{ backgroundColor: `${selectColor} !important` }} >
            <Box className={classes.mainContainer}>
                <Stack className={classes.leftContainer} >
                    <Typography className={classes.headername}>{headerName}</Typography>
                    <Stack className={classes.colorpickerBox} >
                        <Stack
                            className={classes.squareBox}
                            onClick={(event) => setColorPicker(event.currentTarget)}
                            sx={{ background: selectColor || '#fff' }} />
                        <Menu
                            open={isPickerOpen}
                            anchorEl={colorPicker}
                            PaperProps={{
                                style: {
                                    width: "214px",
                                    height: "264px"
                                }
                            }}
                            onClose={handleClose}
                        >
                            <ColorPicker
                                handleSelectColor={(color) => {
                                    setSelectColor(color);
                                }}
                                color={selectColor} />
                        </Menu>
                    </Stack>
                </Stack>
                <Stack className={classes.rightContainer} >
                    {!window.location.pathname.includes('cloud-drives') && (
                        <Stack onClick={handleOpenMenu}>
                            <img src={Combined} alt="" className={classes.barIcon} />
                        </Stack>
                    )}
                    <Button className={classes.shareIcon} >
                        <img src={parsonGreenicon} alt="icon" />
                        <Typography className={classes.shareText} >Share Now</Typography>
                    </Button>
                    <Button className={classes.shareIcon}>
                        <img src={Light_arrow_backward} alt="" />
                        <Typography className={classes.backTypo} >Back to all Folders</Typography>
                    </Button>
                </Stack>
            </Box>
            <WorkSpaceDrawer drawOptions={ListdrawOptions} anchorEl={anchorEl} handleClose={handleCloseMenu} />
        </Box>
    )
}

export default CloudDriveTopBar
