import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import CloudFileCard from '../../../../Common/CloudDriveFileCard/CloudDriveFileCard'
import CloudDriveFolder from '../../../../Common/CloudDriveFolder/CloudDriveFolderCard'
const INITIAL_ARRAY = [
    {
        id: "1",
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
]


const OpenFolderCard = () => {

    const [folderdata, setFolderdata] = useState(INITIAL_ARRAY)

    const handleNavigate = () => {

    }

    return (
        <Box>
            <Grid container spacing={3}>
                {
                    folderdata?.filter(({ type }) => type.includes('folder'))?.map((ele) => (
                        <Grid xs={12} item>
                            <CloudDriveFolder cardData={ele} handleNavigate={handleNavigate} />
                        </Grid>
                    ))
                }
                {
                    folderdata?.filter(({ type }) => type.includes('file'))?.map((ele) => (
                        <Grid xs={12} item>
                            <CloudFileCard cardData={ele} handleNavigate={handleNavigate} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default OpenFolderCard
