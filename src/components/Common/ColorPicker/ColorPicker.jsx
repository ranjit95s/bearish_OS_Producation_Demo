import React from "react";
import classes from "./ColorPicker.module.css";
import {HexColorPicker} from "react-colorful";
import {Stack} from "@mui/material";

const ColorPicker = ({handleSelectColor, color}) => {

    return (
        <>
            <Stack className={classes.colorCodePicker}>
                <HexColorPicker
                    color={color}
                    onChange={(colorCode) => handleSelectColor(colorCode)}/>
                <Stack padding={1} className={classes.colorCodeBox}>
                    <Stack align={`center`} fontSize={`11px`}>
                        {`HEX : ${color || `#000`}`}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default ColorPicker;