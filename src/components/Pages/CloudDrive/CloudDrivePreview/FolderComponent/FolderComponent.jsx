import { Grid } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CloudDriveFolder from '../../../../Common/CloudDriveFolder/CloudDriveFolderCard';
import CloudDriveTopbar from '../CloudDriveTopBar/CloudDriveTopbar';

const FolderComponent = ({ folderdata }) => {

    const [gridView, setGridView] = useState(false)
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/cloud-drives/${id}/folder`);
    }

    return (
        <Box>
            <CloudDriveTopbar setGridView={setGridView} headerName={"Folders"} gridView={gridView} />
            <Box sx={{ flexGrow: 1, marginTop: "20px"}}>
                <Grid container spacing={3}>
                    {
                        folderdata?.filter(({ type }) => type.includes('folder'))?.map((ele) => (
                            <Grid
                                item
                                lg={gridView ? 4 : 12}
                                md={gridView ? 4 : 12}
                                sm={gridView ? 4 : 12}
                                xs={gridView ? 4 : 12}
                                // sx={{ marginBottom: "20px" }}
                            >
                                <CloudDriveFolder cardData={ele} handleNavigate={handleNavigate} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}


export default FolderComponent
