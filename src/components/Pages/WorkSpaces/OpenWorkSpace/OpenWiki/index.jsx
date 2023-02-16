import { Box } from '@mui/material'
import React, { useState } from 'react'
import CloudDriveTopBar from '../../../../Common/CloudDriveTopBar/CloudDriveTopBar'
import EditorComponent from '../../../../Common/froala/froalaEditor'
import WikiSideBarMenu from './WikiSideBarMenu/WikiSideBarMenu'

const OpenWiki = () => {

    const [noteObject, setNoteObject] = useState({ content: '', id: '' });

    return (
        <Box>
            <CloudDriveTopBar headerName={"Wiki Name"} />
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }} >
                <WikiSideBarMenu />
                <EditorComponent noteObject={noteObject} />
            </Box>
        </Box>
    )
}

export default OpenWiki;
