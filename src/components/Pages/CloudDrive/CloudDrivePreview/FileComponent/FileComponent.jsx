import { Grid } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CloudFileCard from '../../../../Common/CloudDriveFileCard/CloudDriveFileCard';
import CloudDriveTopbar from '../CloudDriveTopBar/CloudDriveTopbar';

const FileComponent = ({ folderdata }) => {

    const [gridView, setGridView] = useState(false)
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/cloud-drives/${id}/file`);
    }

    return (
        <Box>
            <CloudDriveTopbar setGridView={setGridView} headerName={"Files"} gridView={gridView}/>
            <Box sx={{ flexGrow: 1, marginTop: "20px"}}>
                <Grid container spacing={3}>
                    {
                        folderdata?.filter(({ type }) => type.includes('file'))?.map((ele) => (
                            <Grid
                                item
                                lg={gridView ? 4 : 12}
                                md={gridView ? 4 : 12}
                                sm={gridView ? 4 : 12}
                                xs={gridView ? 4 : 12}
                            >
                                <CloudFileCard cardData={ele} handleNavigate={handleNavigate} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}


export default FileComponent
