import React from "react";
import {Stack} from "@mui/material";
import classes from "./SendModal.module.css";

const SendModal = ({handleClose}) => {

    return (
        <>
            <Stack className={classes.sendModalMain}>
                <Stack className={classes.title}>
                    Schedule Email
                </Stack>
                <Stack className={classes.dateAndTimeMain}>
                    <Stack justifyContent={'space-between'} direction={'row'} padding={'0 10px 0 10px'}>
                        <Stack>
                            00/00/0000
                        </Stack>
                        <Stack>
                            00:00 AM
                        </Stack>
                    </Stack>
                </Stack>
                <Stack alignItems={'end'}>
                    <Stack className={classes.scheduleNow} onClick={handleClose}>
                        Schedule Now
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default SendModal