import { IconButton } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import LeftContainer from './LeftContainer/LeftContainer'
import RightContainer from './RightContainer/RightContainer'
import classes from "./StatusRow.module.css"
import checkedcheckbox from "../../../../../../../../Images/Bearish/checked-checkbox.svg"
import checkboxunchecked from "../../../../../../../../Images/Bearish/checkbox_unchecked.svg"

const StatusRows = ({ item, i, addColumn, setSelectIndex }) => {
    const [checkList, setCheckList] = useState(false);
    const handleClick = (index) => {
        setSelectIndex(index);
    }
    return (


        <Draggable key={item.id} draggableId={item.id} index={i}>
            {(provided, snapshot) => (
                <Stack
                    className={classes.displayflex}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => handleClick(i)}
                >
                    <Stack className={classes.mainBox}>
                        <LeftContainer Items={item} />
                        <RightContainer Items={item.coloumList} addColumn={addColumn} i={i} />
                    </Stack>
                    <IconButton className={classes.displayflexbutton} onClick={() => setCheckList(!checkList)}>
                        <img src={checkList ? checkedcheckbox : checkboxunchecked} alt="checkboxunchecked" />
                    </IconButton>
                </Stack>
            )}
        </Draggable>
    )
}

export default StatusRows
