import { IconButton, Menu, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import classes from "./StatusMenu.module.css"
import { StatusMenuIcon } from './StatusMenuIcon'
import add_circled from "../../../Images/Bearish/add_circled.svg"
import colorPicker from "../../../Images/Bearish/eye_dropper.svg"
import ColorPicker from '../ColorPicker/ColorPicker'


const StatusMenu = ({ statusArray, handleSelect }) => {
    const [openPicker, setOpenPicker] = useState(false);
    const [selectColor, setSelectColor] = useState("#ff2121")
    const isPickerOpen = Boolean(openPicker);
    const selectIndex = useRef(0);
    const handleClose = () => {
        setOpenPicker(null);
    };

    const handleClickPicker = (event, i) => {
        selectIndex.current = i
        setOpenPicker(event.currentTarget)
    }

    useEffect(()  => {
        statusArray[selectIndex.current].colorCode = selectColor;
    }, [selectColor])

    return (
        <Box className={classes.mainBox} >
            <Box>
                {
                    statusArray?.map((array, i) => (
                        <Stack key={i} className={classes.mainContainer}>
                            <Stack className={classes.optionFlex}>
                                <Stack className={classes.optionBtn} onClick={() => handleSelect(i)} >
                                    <StatusMenuIcon color={array.colorCode} />
                                    <Stack className={classes.menuText}>{array.priority}</Stack>
                                </Stack>
                                <IconButton className={classes.pickerBtn} onClick={(event) => handleClickPicker(event, i)} >
                                    <img src={array.pickerIcon} alt="" className={classes.pickericon} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    ))
                }
                <Stack className={classes.addContainer}>
                    <Stack className={classes.addBtn}>
                        <img src={add_circled} alt="add_circled" className={classes.addIcon} />
                        <Stack className={classes.menuText}>Add More</Stack>
                    </Stack>
                    <IconButton className={classes.pickerBtn}>
                        <img src={colorPicker} className={classes.pickericon} alt="colorPicker" />
                    </IconButton>
                </Stack>
            </Box>

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
                        setSelectColor(color);
                    }}
                    color={selectColor}
                />
            </Menu>

        </Box>
    )
}

export default StatusMenu
