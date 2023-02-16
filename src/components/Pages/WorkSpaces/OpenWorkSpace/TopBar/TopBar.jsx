import { Table, TableCell, TableHead, TableRow, Box, Typography, Menu } from '@mui/material'
import React, { useState } from 'react'
import classes from "./TopBar.module.css"
import { clsx } from "clsx"
import ColorPicker from "../../../../Common/ColorPicker/ColorPicker"
import { Stack } from '@mui/system'
import TopBarTab from './TopBarTab/TopBarTab'
import Combined from "../../../../../Images/Bearish/Combined Shape.svg"
import parsonGreenicon from "../../../../../Images/Bearish/parsonGreenicon.svg"
import chevron_forward from "../../../../../Images/Bearish/chevron_backward.svg"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import parsone from "../../../../../Images/Bearish/parsonGreenicon.svg"
import editLogo from "../../../../../Images/Bearish/Light_edit.svg"
import Trash from "../../../../../Images/Bearish/trashRedIcon.svg"
import Analytics from "../../../../../Images/Bearish/trending_up.svg"
import Comments from "../../../../../Images/Bearish/full_smiley.svg"
import colorPicker from "../../../../../Images/Bearish/eye_dropper_blue.svg"
import WorkSpaceDrawer from '../../../../Common/WorkSpaceMenu/WorkSpaceDrawer'


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

const NotesDrawerOption = [

]


const TopBar = ({ setSelectTabs }) => {
    const navigate = useNavigate();
    const { id } = useParams()
    const location = useLocation()
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
        <Box className={classes.mainContainer} sx={{ backgroundColor: `${selectColor}` }} >
            <Stack className={classes.leftContainer}>
                {location.pathname.includes("list" || "Checklists" || "boards") && <Typography className={classes.listName} >List Name</Typography>}
                {location.pathname.includes("notes") && <Typography className={classes.listName} >Note Name</Typography>}
                {location.pathname.includes("wiki") && <Typography className={classes.listName} >Wiki Name</Typography>}
                {location.pathname.includes("document") && <Typography className={classes.listName} >Doc Name</Typography>}
                <Stack>
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
                <Stack>
                    {!location.pathname.includes("notes") && <TopBarTab setSelectTabs={setSelectTabs} />}
                </Stack>
            </Stack>
            <Stack className={classes.rightContainer}>
                <Stack onClick={handleOpenMenu}>
                    <img src={Combined} alt="" className={classes.barIcon} />
                </Stack>
                <Stack className={classes.shareContainer}>
                    <img src={parsonGreenicon} alt="" className={classes.barIcon} />
                    <Typography className={classes.shareTypo}>Share Now</Typography>
                </Stack>
                <Stack className={classes.backContainer} onClick={() => navigate(`/workspace/${id}`)}>
                    <img src={chevron_forward} alt="" className={classes.barIcon} />
                    <Typography className={classes.backTypo}>Back to Workspace</Typography>
                </Stack>
            </Stack>
            <WorkSpaceDrawer drawOptions={ListdrawOptions} anchorEl={anchorEl} handleClose={handleCloseMenu} />
        </Box>
    )
}

export default TopBar
