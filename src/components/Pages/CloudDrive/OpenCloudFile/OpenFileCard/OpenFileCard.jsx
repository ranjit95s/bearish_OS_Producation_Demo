import { Box } from '@mui/system'
import React from 'react'
import FileDocument from './FileDocument/FileDocument';
import FilePreview from './FilePreview/FilePreview';

const OpenFileCard = () => {
    return (
        <Box sx={{display: "flex", }} >
            <FilePreview />
            <FileDocument />
        </Box>
    )
}

export default OpenFileCard;