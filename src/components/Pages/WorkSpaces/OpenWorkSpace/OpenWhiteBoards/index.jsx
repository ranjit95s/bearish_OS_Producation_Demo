import { Menu } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import WhiteBoardToolBar from '../../../../Common/WhiteBoardToolBar/WhiteBoardToolBar';
import BoardContainer from './BoardContainer/BoardContainer';

const OpenWhiteBoard = () => {
    return (
        <Box>
            <BoardContainer />
            <WhiteBoardToolBar />
        </Box>
    )
}

export default OpenWhiteBoard;