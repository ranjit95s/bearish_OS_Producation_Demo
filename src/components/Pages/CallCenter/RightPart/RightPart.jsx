import React from "react";
import {Stack} from "@mui/material";
import Prepare from "./Prepare/Prepare";
import CallLog from "./CallLog/CallLog";

const RightPart = () => {

    return (
        <>
            <Stack gap={'20px'}>
                <Prepare/>
                <CallLog/>
            </Stack>
        </>
    )
};
export default RightPart;