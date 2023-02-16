import React from "react";
import {Stack} from "@mui/material";
import DefaultContainer from "../DefaultLayout/components/DefaultContainer";

const MeetingLayout = ({routeList}) => {
    return (<>
        <Stack sx={{height: `100vh`}}>
            <Stack sx={{flex: 'auto', overflow: `auto`}}
                   direction={`row`}>
                <DefaultContainer/>
            </Stack>
        </Stack>
    </>)
};

export default MeetingLayout;
