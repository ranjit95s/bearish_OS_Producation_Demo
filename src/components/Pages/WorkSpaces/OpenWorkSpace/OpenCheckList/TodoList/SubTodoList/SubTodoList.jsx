import { Stack } from '@mui/system';
import React, { useState } from 'react'
import classes from './SubTodoList.module.css'
import { Button, IconButton, Typography } from '@mui/material';
import { Droppable } from 'react-beautiful-dnd';
import StatusRows from './StatusRow/StatusRow';
import dwonArrow from '../../../../../../../Images/Bearish/chevron_down.svg'
import upArrow from '../../../../../../../Images/Bearish/chevron_up.svg'
import morevertical from '../../../../../../../Images/Bearish/more_vertical.svg'
import { header } from './subTool';


const SubTodoList = ({ statusData, addColumn, checkList, setSelectIndex, index }) => {

    const [expandList, setExpandList] = useState(true);
    const handelExpandClick = () => {
        setExpandList(!expandList);
    }
    return (
        <>
            <Stack className={classes.displayflexBox}>
                <Stack className={classes.mainBox} sx={{ backgroundColor: `${statusData?.color}40` }} >
                    <Stack className={classes.mainflexBox}>
                        <Stack className={classes.flexBox}>
                            <Button className={classes.imagewidth} onClick={handelExpandClick}>
                                <img src={expandList ? dwonArrow : upArrow} alt="dwon" />
                            </Button>
                            <Typography className={classes.textsize}>{statusData?.status}</Typography>
                        </Stack>
                        <Stack>
                            <IconButton className={classes.moreimage}>
                                <img src={morevertical} alt="dwon" />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={classes.headerimg}>
                    {header.map((item, i) => (
                        <Stack key={i}>
                            <Typography className={classes.dateText}>{item?.name}</Typography>
                        </Stack>
                    ))}
                    <Typography className={classes.dateText}>Add Coloum</Typography>
                </Stack>
            </Stack>
            {expandList &&
                <Droppable droppableId={`${index}`}>
                    {(provided, snapshot) => (
                        <Stack
                            className={classes.marginTop}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {statusData?.data?.map((item, i) => (
                                <React.Fragment key={i} >
                                    <StatusRows item={item} i={i} addColumn={addColumn} checkList={checkList} setSelectIndex={setSelectIndex} />
                                </React.Fragment>
                            ))}
                        </Stack>
                    )}
                </Droppable>
            }
        </>
    )
}

export default SubTodoList;
