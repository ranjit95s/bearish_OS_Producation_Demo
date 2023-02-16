import { Box } from '@mui/material'
import React, { useState } from 'react'
import FileComponent from './FileComponent/FileComponent'
import FolderComponent from './FolderComponent/FolderComponent'
import CreateCloudDrive from './CreateCloudDrive/CreateCloudDrive'


const INITIAL_ARRAY = [
    {
        id: "1",
        name: "Your folder name here",
        type: "folder"
    },
    {
        id: "2",
        name: "Your folder name here",
        type: "folder"
    },
    {
        id: "3",
        name: "Your folder name here",
        type: "folder"
    },
    {
        id: "4",
        name: "Your folder name here",
        type: "folder"
    },
    {
        id: "5",
        name: "Your file name is here",
        type: "folder"
    },
    {
        id: "6",
        name: "Your file name is here",
        type: "file"
    },
    {
        id: "7",
        name: "Your file name is here",
        type: "file"
    },
    {
        id: "8",
        name: "Your file name is here",
        type: "file"
    },
    {
        id: "9",
        name: "Your file name is here",
        type: "file"
    },
    {
        id: "10",
        name: "Your file name is here",
        type: "file"
    },
    {
        id: "11",
        name: "Your file name is here",
        type: "file"
    },
]

const CloudDrivePreview = () => {
    const [folderdata, setFolderdata] = useState(INITIAL_ARRAY);

    return (
        <Box sx={{ display: 'flex' }}>
            <CreateCloudDrive />
            <Box>
                <Box sx={{ height: "300px", overflow: "scroll" }}>
                    <FolderComponent folderdata={folderdata} />
                </Box>
                <Box sx={{ height: "300px", overflow: "scroll", marginTop: "25px" }}>
                    <FileComponent folderdata={folderdata} />
                </Box>
            </Box>
        </Box>
    )
}

export default CloudDrivePreview
