import React from "react";
import Stack from "@mui/material/Stack";
import classes from "./BoxIcon.module.css"
import nextIcon from "../../../../../Images/Bearish/chevron_forward.svg"

const BoxIcon = () => {

    return (
        <>
            <Stack className={classes.boxIcon}>
                <Stack width={'25px'} height={'25px'}>
                    <img src={nextIcon} width={'100%'} height={'100%'} alt={''}/>
                </Stack>
            </Stack>
        </>
    )
};
export default BoxIcon;
