import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import classes from "./CloudDriveFolderCard.module.css"
import folder from "../../../Images/Bearish/folder.svg"
import more_vertical from "../../../Images/Bearish/more_vertical.svg"
import { Stack } from '@mui/system'
import parsone from "../../../Images/Bearish/parsonGreenicon.svg"
import editLogo from "../../../Images/Bearish/Light_edit.svg"
import Trash from "../../../Images/Bearish/trashRedIcon.svg"
import addCircle from "../../../Images/Bearish/add_circled.svg"
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
        name: "Add an Item",
        icon: addCircle,
    },
    {
        name: "Move to Folder",
        icon: folder,
    },
    {
        name: "Delete",
        icon: Trash,
    },
];

const CloudDriveFolder = ({ cardData, handleNavigate }) => {
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
                    <img src={folder} alt="folder" className={classes.folderIcon} />
                    <Typography className={classes.foldername}>{cardData.name}</Typography>
                </Stack>
                <IconButton onClick={handleOpenMenu}>
                    <img src={more_vertical} alt="justify" />
                </IconButton>
            </Box>
            <WorkSpaceDrawer drawOptions={drawOptions} anchorEl={anchorEl} handleClose={handleCloseMenu} />
        </Box>
    )
}

export default CloudDriveFolder
