import { Button, IconButton, Menu, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import classes from "./Chack_ColorPickerRender.module.css"
import check from "../../../../../../../Images/Bearish/checked-checkbox.svg"
import Uncheck from "../../../../../../../Images/Bearish/checkbox_unchecked.svg"
import colorPickerIcon from "../../../../../../../Images/Bearish/eye_dropper.svg"
import ColorPicker from "../../../../../../Common/ColorPicker/ColorPicker"


const Chack_ColorPIckerRender = (props) => {
    const { hasFocus, value } = props;
    const [checkBox, setCheckBox] = useState(false)
    const [openColorPicker, setOpenColorPicker] = useState(false);
    const [selectColor, setSelectColor] = useState("#fff")
    const isPickerOpen = Boolean(openColorPicker);
    const handleClose = () => {
        setOpenColorPicker(null);
    };


    return (
        <Box className={classes.firstCelContainer}>
            <Typography className={classes.firstCelNo}>
                {props.id}
            </Typography>
            <Button
                tabIndex={hasFocus ? 0 : -1}
            >
                <img src={!checkBox ? Uncheck : check} alt="" onClick={() => setCheckBox(!checkBox)} />
            </Button>
            <IconButton onClick={(event) => setOpenColorPicker(event.currentTarget)}>
                <img src={colorPickerIcon} alt="colorPicker" className={classes.colorPicker} />
            </IconButton>
            <Menu
                open={isPickerOpen}
                anchorEl={openColorPicker}
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
                    color={selectColor} />
            </Menu>
        </Box>
    )
}

export default Chack_ColorPIckerRender;