import { Menu, Stack } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ColorPicker from '../../../../../../Common/ColorPicker/ColorPicker';
import classes from "./LableRender.module.css"

const LableRender = () => {
    const [selectColor, setSelectColor] = useState("#fff");
    const [colorPicker, setColorPicker] = useState(false);
    const isPickerOpen = Boolean(colorPicker);
    const handleClose = () => {
        setColorPicker(null);
    };
    return (
        <Box className={classes.lablecontainer}>
            <Stack>
                <Stack
                    className={classes.squareBox}
                    onClick={(event) => setColorPicker(event.currentTarget)}
                    sx={{ background: selectColor || '#fff' }} />
                <Menu
                    open={isPickerOpen}
                    anchorEl={colorPicker}
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
            </Stack>
        </Box>
    )
}

export default LableRender
