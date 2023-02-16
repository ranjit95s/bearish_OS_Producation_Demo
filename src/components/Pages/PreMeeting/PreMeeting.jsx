import React from "react";
import Stack from "@mui/material/Stack";
import classes from "./PreMeeting.module.css";
import PreMeetingLeftPart from "./LeftPart/PreMeetingLeftPart";

const PreMeeting = () => {

    return (
        <>
            <Stack>
                <Stack className={classes.preMeetingMain}>
                    <Stack direction={'row'} gap={'25px'}>
                        <PreMeetingLeftPart/>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};

export default PreMeeting;
