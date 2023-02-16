import React from "react";
import {Stack} from "@mui/material";
import classes from "./Label.module.css";

const Label = (props) => {
    const {title, bgColor} = props;
    return (
        <>
            <Stack className={classes.labelMain} sx={{background: bgColor}}>
                <Stack className={classes.title}>
                    {title}
                </Stack>
            </Stack>
        </>
    )
};
export default Label;