import React from "react";
import Stack from "@mui/material/Stack";
import NameOfMeeting from "../../ViewEventCard/NameOfMeeting/NameOfMeeting";
import classes from "./PreMeetingLeftPart.module.css";

const PreMeetingLeftPart = () => {

    return (
        <>
            <Stack gap={'20px'}>
                <NameOfMeeting/>
                <Stack className={classes.recording}>

                </Stack>
            </Stack>
        </>
    )
};
export default PreMeetingLeftPart;
