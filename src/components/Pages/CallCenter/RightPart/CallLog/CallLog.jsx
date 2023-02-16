import React from "react";
import {Stack} from "@mui/material";
import classes from "./CallLog.module.css";
import CallLogHeader from "./CallLogHeader/CallLogHeader";
import CallLogTable from "./CallLogTable/CallLogTable";

const CallLog = () => {

    return (
        <>
            <Stack className={classes.callLogMain}>
                <Stack padding={'20px 20px 19px 20px'} gap={'35px'}>
                    <CallLogHeader/>
                    <Stack>
                        <CallLogTable/>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default CallLog;
