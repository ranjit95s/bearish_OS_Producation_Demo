import { Button, Menu, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import add_circled from '../../../../../../../../../Images/Bearish/add_circled.svg'
import AddToList from '../../../../../../../../Common/AddToListModle/AddToList'
import PriorityIconMenu from '../../../../../../../../Common/PriorityIconMenu/PriorityIconMenu'
import classes from './RightContainer.module.css'
import pickerIcon from "../../../../../../../../../Images/Bearish/eye_dropper.svg";
import upperDoubleArrowIcon from "../../../../../../../../../Images/Bearish/upperDoubleArrow.svg";
import { PriorityIcon } from '../../../../../../../../Common/PriorityIconMenu/Priorityicon'

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


const RightContainer = ({ Items, addColumn, i }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const isMenuOpen = Boolean(openMenu);

    const [priorityArray, setPriorityArray] = useState(INITIAL_PRIORITY_ARRAY);
    const [selections, setSelections] = useState();
    const [openPrioMenu, setOpenPrioMenu] = useState(false);
    const isMenuPrioOpen = Boolean(openPrioMenu);
    const handleCloseMenu = () => {
        setOpenPrioMenu(null);
    };
    const handleSelect = (i) => {
        setSelections(priorityArray[i].colorCode);
    }
    const handleOpenMenu = (event, i) => {
        setOpenMenu(event.currentTarget)
    }
    const handleClose = () => {
        setOpenMenu(null);
    };

    return (
        <Stack className={classes.mainflexbox}>
            {Items?.map((item) => (
                <Stack key={item.name}>
                    <Stack className={classes.listflex}>
                        {/* <Typography className={classes.dateText}>{item?.name}</Typography> */}
                        {
                            item.name === "Assignee" ?
                                <Stack className={classes.roundedtext}>
                                    <Typography className={classes.subroundedtext}>{item?.icon}</Typography>
                                </Stack> :
                                item.name === "Priority" ?
                                    <>
                                        <Button onClick={(event) => setOpenPrioMenu(event.currentTarget)}>
                                            <PriorityIcon color={selections} />
                                        </Button>
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
                                    </>
                                    :
                                    <Button>
                                        <img src={item?.icon} alt="alarm" />
                                    </Button>

                        }
                    </Stack>
                </Stack>
            ))}
            <Stack className={classes.listflex}>
                <Button onClick={(event) => handleOpenMenu(event, i)}>
                    <img src={add_circled} alt="alarm" />
                </Button>
                <Menu
                    open={isMenuOpen}
                    anchorEl={openMenu}
                    PaperProps={{
                        style: {
                            width: "auto",
                            height: "auto"
                        }
                    }}
                    onClose={handleClose}
                >
                    <AddToList addColumn={addColumn} setOpenMenu={setOpenMenu} />
                </Menu>
            </Stack>
        </Stack>
    )
}

export default RightContainer;
