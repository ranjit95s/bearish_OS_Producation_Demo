import { Box, Menu, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import ColorPicker from '../ColorPicker/ColorPicker';
import { PriorityIcon } from './Priorityicon';
import classes from "./PriorityIconMenu.module.css"
import add_circled from "../../../Images/Bearish/add_circled.svg"
import pickerIcon from '../../../Images/Bearish/eye_dropper.svg'

const PriorityIconMenu = ({ priorityArray, handleSelect, handelAddmoreClick, inputShow, handelinputChange, handelAddItem, setChangeColorCode }) => {

    const [openPicker, setOpenPicker] = useState(false);
    const [selectColor, setSelectColor] = useState("#ff2121")
    const selectIndex = useRef(0)
    const isPickerOpen = Boolean(openPicker);
    const handleClose = () => {
        setOpenPicker(null);
    };

    const handleClickPicker = (event, i) => {
        selectIndex.current = i
        setOpenPicker(event.currentTarget)
    }

    const handleAddClickPicker = (event) => {
        setOpenPicker(event.currentTarget)

    }

    const handelChangecolor = (color) => {
        setSelectColor(color);
        setChangeColorCode(color);
    }

    useEffect(() => {
        priorityArray[selectIndex.current].colorCode = selectColor
    }, [selectColor])


    return (
        <Box className={classes.mainContainer}>
            {
                priorityArray?.map((array, i) => (
                    <Stack key={i} className={classes.mainStack} >
                        <Stack direction={'row'} gap={'10px'} alignItems={'center'} className={classes.optionBtn} onClick={() => handleSelect(i)} >
                            <PriorityIcon color={array.colorCode} width={'10px'} />
                            <Stack className={classes.priorityText} >{array.priority}</Stack>
                        </Stack>
                        <Stack className={classes.pickerButton} onClick={(event) => handleClickPicker(event, i)}>
                            <img src={array.pickerIcon} alt="" className={classes.pickericon} />
                        </Stack>
                    </Stack>
                ))
            }
            <Stack className={classes.addContainer} >
                <Box className={classes.boxaddmoreflex}>
                    <img src={add_circled} alt="add_circled" className={classes.addIcon} onClick={() => handelAddItem()} />
                    {inputShow
                        ? <input
                            type="text"
                            autoFocus
                            style={{ width: '75px', border: 'none' }}
                            placeholder={'Add More'}
                            className={classes.inputText}
                            onChange={(e) => handelinputChange(e)}
                        />
                        : <Typography className={classes.addTypo} onClick={() => handelAddmoreClick()}>Add More</Typography>
                    }
                </Box>
                <Stack className={classes.pickerButton} onClick={(event) => handleAddClickPicker(event)}>
                    <img src={pickerIcon} alt="" className={classes.pickericon} />
                </Stack>
            </Stack>
            <Menu
                open={isPickerOpen}
                anchorEl={openPicker}
                PaperProps={{
                    style: {
                        width: "214px",
                        height: "264px"
                    }
                }}
                onClose={handleClose}
            >
                <ColorPicker
                    handleSelectColor={(color) => {
                        handelChangecolor(color)
                    }}
                    color={selectColor}
                />
            </Menu>
        </Box>
    )
}

export default PriorityIconMenu
