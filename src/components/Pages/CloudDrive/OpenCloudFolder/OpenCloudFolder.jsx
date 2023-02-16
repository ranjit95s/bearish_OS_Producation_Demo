import { Box } from '@mui/material'
import React from 'react'
import CloudDriveTopBar from '../../../Common/CloudDriveTopBar/CloudDriveTopBar'
import OpenFolderCard from './OpenFolderCard/OpenFolderCard'

const OpenCloudFolder = () => {
    return (
        <Box>
            <CloudDriveTopBar headerName={"Folder Name"} />
            <OpenFolderCard />
        </Box>
    )
}

export default OpenCloudFolder;
