import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import classes from "./TopBarTab.module.css"
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
];

const TopBarTab = ({ setSelectTabs }) => {
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
        setSelectTabs(value)
    };

    return (
        <Box className={classes.tabsContainer}>
            {
                (state || []).map((item, i) => (
                    <React.Fragment key={i}>
                        <Stack key={i} gap={'3px'} sx={{ display: "flex" }} >
                            <Stack className={clsx(state[i].select && classes.selectedName, classes.header_name)} onClick={() => handleSelect(item.value, i)}>
                                {item.name}
                            </Stack>
                        </Stack>
                    </React.Fragment>
                ))
            }
        </Box>
    )
}

export default TopBarTab
