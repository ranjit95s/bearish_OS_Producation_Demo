import { IconButton, Menu } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { PriorityIcon } from '../../../../../../Common/PriorityIconMenu/Priorityicon';
import PriorityIconMenu from "../../../../../../Common/PriorityIconMenu/PriorityIconMenu"
import classes from "./PriorityRender.module.css"
import upperDoubleArrowIcon from "../../../../../../../Images/Bearish/upperDoubleArrow.svg"
import pickerIcon from "../../../../../../../Images/Bearish/eye_dropper.svg";

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


const PriorityRender = () => {

    const [priorityArray, setPriorityArray] = useState(INITIAL_PRIORITY_ARRAY);
    const [selections, setSelections] = useState();
    const [inputShow, setInputShow] = useState(false);
    const [changeColorCode, setChangeColorCode] = useState('#ff2121');
    const [priorityName, setPriorityName] = useState('');
    const [openPriority, setOpenPriority] = useState(false);
    const isPriorityOpen = Boolean(openPriority);

    const handleClose = () => {
        setOpenPriority(null);
    };

    const handleSelect = (i) => {
        setSelections(priorityArray[i].colorCode);
    };

    const handelAddmoreClick = () => {
        setInputShow(true);
    };

    const handelinputChange = (e) => {
        setPriorityName(e.target.value);
    }

    const handelAddItem = () => {
        const priorityState = {
            priorityIcon: upperDoubleArrowIcon,
            priority: priorityName,
            pickerIcon: pickerIcon,
            colorCode: changeColorCode,
            isOpen: false
        }
        setPriorityArray([...priorityArray, priorityState]);
        setPriorityName('');
        setInputShow(false);
        setChangeColorCode('#ff2121')
    };


    return (
        <Box className={classes.mainContainer}>
            <strong>
                <IconButton
                    className={classes.button}
                    onClick={(event) => setOpenPriority(event.currentTarget)}
                >
                    <PriorityIcon color={selections} />
                </IconButton>
            </strong>
            <Menu
                open={isPriorityOpen}
                anchorEl={openPriority}
                PaperProps={{
                    style: {
                        width: "133px",
                        height: "auto",
                        minWidth: '133px !important'
                    }
                }}
                onClose={handleClose}
            >
                <PriorityIconMenu
                    priorityArray={priorityArray}
                    handleSelect={handleSelect}
                    handelAddmoreClick={handelAddmoreClick}
                    inputShow={inputShow}
                    handelinputChange={handelinputChange}
                    handelAddItem={handelAddItem}
                    setChangeColorCode={setChangeColorCode}
                />
            </Menu>
        </Box>
    )
}

export default PriorityRender
