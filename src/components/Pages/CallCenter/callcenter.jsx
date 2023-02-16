import React from "react";
import {Stack} from "@mui/material";
import LeftPart from "./LeftPart/LeftPart";
import RightPart from "./RightPart/RightPart";

const CallCenter = () => {

    return (
        <>
            <Stack fontFamily={'Source Serif Pro'} direction={'row'} gap={'20px'} flex={1}>
                <LeftPart/>
                <RightPart/>
            </Stack>
        </>
    )
};
export default CallCenter;