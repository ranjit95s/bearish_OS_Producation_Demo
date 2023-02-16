import { IconButton, Menu, Popover, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PriorityIcon } from '../../../../../../Common/PriorityIconMenu/Priorityicon'
import PriorityIconMenu from '../../../../../../Common/PriorityIconMenu/PriorityIconMenu'
import classes from './StatusData.module.css'
import pickerIcon from "../../../../../../../Images/Bearish/eye_dropper.svg";
import upperDoubleArrowIcon from "../../../../../../../Images/Bearish/upperDoubleArrow.svg";
import BoardUserModel from './BoardUserModel/BoardUserModel'
import { Draggable } from 'react-beautiful-dnd'

const INITIAL_PRIORITY_ARRAY = [{
    priorityIcon: upperDoubleArrowIcon,
    priority: 'High',
    pickerIcon: pickerIcon,
    colorCode: '#ff2121',
    isOpen: false
}, {
    priorityIcon: upperDoubleArrowIcon,
    priority: 'Medium',
    pickerIcon: pickerIcon,
    colorCode: '#ffa906',
    isOpen: false
}, {
    priorityIcon: upperDoubleArrowIcon,
    priority: 'Low',
    pickerIcon: pickerIcon,
    colorCode: '#040eff',
    isOpen: false
}, {
    priorityIcon: upperDoubleArrowIcon,
    priority: 'Custom',
    pickerIcon: pickerIcon,
    colorCode: '#62e3a2',
    isOpen: false
}];

const StatusData = ({ item }) => {

    const [priorityArray, setPriorityArray] = useState(INITIAL_PRIORITY_ARRAY);
    const [selections, setSelections] = useState();
    const [openPrioMenu, setOpenPrioMenu] = useState(false);
    const [openModelPrioMenu, setOpenModelPrioMenu] = useState(false);
    const isMenuPrioOpen = Boolean(openPrioMenu);
    const isModelMenuPrioOpen = Boolean(openModelPrioMenu);

    const handleCloseMenu = () => {
        setOpenPrioMenu(null);
    };
    const handleSelect = (i) => {
        setSelections(priorityArray[i].colorCode);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleModelCloseMenu = () => {
        setOpenModelPrioMenu(null);
    };

    const open = Boolean(anchorEl);

    return (


        <>
            {item?.data?.map((data, i) => (
                <Draggable key={data?.id} draggableId={data?.id} index={i}>
                    {(provided, snapshot) => (
                        <Stack className={classes.mainBox} ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <Stack
                                className={classes.mainflexbox}
                                key={i}

                            >
                                <Stack>
                                    <Stack>
                                        <Typography className={classes.titlefont}>{data?.title}</Typography>
                                    </Stack>
                                    <Stack>
                                        <Typography className={classes.description}>{data?.description}</Typography>
                                    </Stack>
                                    <Stack className={classes.timeboxflex}>
                                        <img src={data?.timeImg} alt="" />
                                        <Typography className={classes.timetext}>{data?.time}</Typography>
                                    </Stack>
                                </Stack>
                                <Stack className={classes.righticonfelx}>
                                    <Stack>
                                        <IconButton onClick={(event) => setOpenModelPrioMenu(event.currentTarget)}>
                                            <img src={data?.assignIcon} alt="" />
                                        </IconButton>
                                        <Menu
                                            open={isModelMenuPrioOpen}
                                            anchorEl={openModelPrioMenu}
                                            PaperProps={{
                                                sx: {
                                                    width: "305px",
                                                    height: "275px"
                                                }
                                            }}
                                            onClose={handleModelCloseMenu}
                                        >
                                            <BoardUserModel />
                                        </Menu>
                                        <IconButton
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            <img src={data?.editIcon} alt="" />
                                        </IconButton>
                                    </Stack>
                                    <IconButton onClick={(event) => setOpenPrioMenu(event.currentTarget)}>
                                        <PriorityIcon color={selections} />
                                    </IconButton>
                                    <Menu
                                        open={isMenuPrioOpen}
                                        anchorEl={openPrioMenu}
                                        PaperProps={{
                                            style: {
                                                width: "auto",
                                                height: "auto"
                                            }
                                        }}
                                        onClose={handleCloseMenu}
                                    >
                                        <PriorityIconMenu priorityArray={priorityArray} handleSelect={handleSelect} />
                                    </Menu>
                                </Stack>
                            </Stack>
                        </Stack >
                    )}
                </Draggable>
            ))}

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                PaperProps={{
                    style: {
                        width: '300px',
                        height: '150px',
                        borderRadius: '5px',
                    },
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
            </Popover>
        </>
    )
}

export default StatusData
