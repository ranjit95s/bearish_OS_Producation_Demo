import React from "react";
import Stack from "@mui/material/Stack";
import classes from "./MeetingInformation.module.css";
import infoIcon from "../../../../../Images/Bearish/info.svg";

const MeetingInformation = () => {

    return (
        <>
            <Stack className={classes.infoIcon}>
                <Stack>
                    <img src={infoIcon} alt={''}/>
                </Stack>
            </Stack>
        </>
    )
};
export default MeetingInformation;
