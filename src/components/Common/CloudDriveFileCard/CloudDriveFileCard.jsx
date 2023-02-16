import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import classes from "./CloudDriveFileCard.module.css"
import more_vertical from "../../../Images/Bearish/more_vertical.svg"
import { Stack } from '@mui/system'
import parsone from "../../../Images/Bearish/parsonGreenicon.svg"
import editLogo from "../../../Images/Bearish/Light_edit.svg"
import Trash from "../../../Images/Bearish/trashRedIcon.svg"
import Analytics from "../../../Images/Bearish/trending_up.svg"
import Comments from "../../../Images/Bearish/full_smiley.svg"
import colorPicker from "../../../Images/Bearish/eye_dropper_blue.svg"
import files from "../../../Images/Bearish/files.svg"
import WorkSpaceDrawer from '../WorkSpaceMenu/WorkSpaceDrawer'

const drawOptions = [
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

const CloudFileCard = ({ cardData, handleNavigate }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.cardContainer}>
                <Stack className={classes.leftContainer} onClick={() => handleNavigate(cardData.id)}>
                    <img src={files} alt="files" className={classes.fileIcon} />
                    <Typography className={classes.fileName}>{cardData.name}</Typography>
                </Stack>
                <IconButton onClick={handleOpenMenu}>
                    <img src={more_vertical} alt="justify" />
                </IconButton>
            </Box>
            <WorkSpaceDrawer drawOptions={drawOptions} anchorEl={anchorEl} handleClose={handleCloseMenu} />
        </Box>
    )
}

export default CloudFileCard
