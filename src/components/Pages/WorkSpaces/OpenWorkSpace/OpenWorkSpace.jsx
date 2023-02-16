import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OpenList from './OpenList/Index'
import TopBar from "./TopBar/TopBar"
import OpenCheckList from './OpenCheckList'
import OpenBoardList from './OpenBoardList'
import { Stack } from '@mui/system'
import { useLocation } from 'react-router-dom'

const OpenWorkSpace = () => {
    const [selectTabs, setSelectTabs] = useState("lists");
    const location = useLocation()
    useEffect(() => {
        if (location.pathname.includes('Checklists')) {
            setSelectTabs("checklists")
        } else if (location.pathname.includes('lists')) {
            setSelectTabs("list")
        } else if (location.pathname.includes('boards')) {
            setSelectTabs("boards")
        }
    }, []);
    
    return (
        <Stack>
            <Box>
                <TopBar setSelectTabs={setSelectTabs} />
                {selectTabs === 'lists' && <OpenList />}
                {selectTabs === 'checklists' && <OpenCheckList />}
                {selectTabs === 'boards' && <OpenBoardList />}
            </Box>
        </Stack>
    )
}

export default OpenWorkSpace;
