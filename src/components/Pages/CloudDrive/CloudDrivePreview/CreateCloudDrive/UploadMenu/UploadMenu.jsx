import { Popover, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import folder from '../../../../../../Images/Bearish/folder.svg'
import files from "../../../../../../Images/Bearish/files.svg"
import classes from './UploadMenu.module.css'

const UploadMenu = ({ id, isOpen, open, handleClose }) => {

    const [showContent, setShowContent] = useState(false)

    const handelOnShowClick = () => {
        setShowContent(!showContent);
    };

    return (
        <Popover
            id={id}
            open={isOpen}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 430,
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            menuStyle={{ boxShadow: 'none' }}
            PaperProps={{
                style: { width: '250px', height: "300px", padding: "10px", border: "3px solid #E9EDF2", cursor: 'pointer' },
            }}
            onClick={() => handelOnShowClick()}
        >
            <Stack>
                <Stack className={classes.createnewText}>
                    <Typography>Upload Files</Typography>
                </Stack>
                {showContent
                    ? <>
                        <Stack className={classes.folderfelxMain}>
                            <img src={folder} alt="" className={classes.folderImg} />
                            <Typography className={classes.folderText}>Folder Name</Typography>
                        </Stack>
                        <Stack className={classes.filefelxMain}>
                            <img src={files} alt="" className={classes.fileImg} />
                            <Typography className={classes.folderText}>File Name</Typography>
                        </Stack>
                    </>
                    : <Stack className={classes.pargraphText}>
                        <Typography>Drag and Drop Files here to upload them, or press search files</Typography>
                    </Stack>}
            </Stack>
        </Popover>
    )
}

export default UploadMenu
