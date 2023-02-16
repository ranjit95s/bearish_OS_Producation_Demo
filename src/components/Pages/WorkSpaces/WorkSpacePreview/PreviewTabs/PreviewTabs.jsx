import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import classes from "./PreviewTabs.module.css"
import { clsx } from "clsx"

const INITIAL_ARRAY = [{
    name: 'Lists',
    value: 'lists',
    select: true,

}, 
{
    name: 'Checklists',
    value: 'checklists',
    select: false,

}, 
{
    name: 'Boards',
    value: 'boards',
    select: false,

}, 
{
    name: 'Whiteboards',
    value: 'whiteboards',
    select: false,

},
{
    name: 'Docs & Wikis',
    value: 'docs&Wikis',
    select: false,

},
{
    name: 'Notes',
    value: 'notes',
    select: false,

},
];

const PreviewTabs = ({setSelectedTab}) => {
    const [state, setState] = useState(INITIAL_ARRAY);

    const handleSelect = (value, index) => {
        setState((each) =>
            each.map((eachMenu, eachMenuIndex) => {
                return eachMenuIndex === index ?
                    {
                        ...eachMenu,
                        select: true
                    } : {
                        ...eachMenu,
                        select: false
                    }
            })
        )
        setSelectedTab(value)
    };
    return (
        <Box className={classes.tabsContainer}>
            {
                (state || []).map((item, i) => (
                    <React.Fragment key={i}>
                        <Stack key={i} gap={'3px'} sx={{ display: "flex" }}>
                            <Stack className={clsx(!state[i].select && classes.selectedName, classes.header_name)} onClick={() => handleSelect(item.value, i)}>
                                {item.name}
                            </Stack>
                        </Stack>
                    </React.Fragment>
                ))
            }
        </Box>
    )
}

export default PreviewTabs
