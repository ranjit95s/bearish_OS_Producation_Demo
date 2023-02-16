import { Box, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import classes from './CreateCloudDrive.module.css'
import addCircel from '../../../../../Images/Bearish/add_circled.svg'
import folder from '../../../../../Images/Bearish/folder_add.svg'
import upload from '../../../../../Images/Bearish/upload.svg'
import FolderMenu from './FolderMenu/FolderMenu'
import UploadMenu from './UploadMenu/UploadMenu'

const CreateCloudDrive = () => {

    const [showOption, setShowOption] = useState(false);
    const [open, setOpen] = useState(false)
    const [IsopeMenu, setIsOpeMenu] = useState(false)
    const isOpen = Boolean(open);
    const isOpenItem = Boolean(IsopeMenu);
    const id = open ? 'simple-popover' : undefined;

    const handelClick = () => {
        setShowOption(!showOption);
    }

    const handleClose = () => {
        setOpen(null);
        setIsOpeMenu(null)
    };

    return (
        <Box sx={{ marginRight: '20px' }}>
            <Stack className={classes.maincreateText} onClick={() => handelClick()}>
                <IconButton sx={{ padding: '0px' }}>
                    <img src={addCircel} alt="" />
                </IconButton>
                <Stack className={classes.createText}>Create New</Stack>
            </Stack>
            {showOption &&
                <Stack className={classes.mainFolderFile}>
                    <Box className={classes.folderFile} onClick={(event) => setOpen(event.currentTarget)}>
                        <IconButton sx={{ padding: '0px', marginLeft: '12px' }}>
                            <img src={folder} alt="" />
                        </IconButton>
                        <Stack className={classes.folderText}>Folder</Stack>
                    </Box>
                    <Box className={classes.folderFile} onClick={(event) => setIsOpeMenu(event.currentTarget)}>
                        <IconButton sx={{ padding: '0px', marginLeft: '12px' }}>
                            <img src={upload} alt="" />
                        </IconButton>
                        <Stack className={classes.fileText}>Upload</Stack>
                    </Box>
                </Stack>
            }
            <FolderMenu
                id={id}
                isOpen={isOpen}
                open={open}
                handleClose={handleClose}
            />
            <UploadMenu 
              id={id}
              isOpen={isOpenItem}
              open={IsopeMenu}
              handleClose={handleClose}
            />
        </Box>
    )
}

export default CreateCloudDrive
