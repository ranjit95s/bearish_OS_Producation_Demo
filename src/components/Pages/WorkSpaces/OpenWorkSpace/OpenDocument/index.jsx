import { Box } from '@mui/material'
import React, { useState } from 'react'
import CloudDriveTopBar from '../../../../Common/CloudDriveTopBar/CloudDriveTopBar'
import EditorComponent from '../../../../Common/froala/froalaEditor'

const OpenDocument = () => {

  const [noteObject, setNoteObject] = useState({ content: '', id: '' });

  return (
    <Box>
      <CloudDriveTopBar headerName={"Doc Name"} />
      <EditorComponent noteObject={noteObject} />
    </Box>
  )
}

export default OpenDocument;