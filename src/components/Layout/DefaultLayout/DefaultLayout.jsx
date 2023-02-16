import React from "react";
import {Stack} from "@mui/material";
import {DefaultContainer, DefaultDrawer, Header} from "./components";

const DefaultLayout = ({routeList}) => {
    return (<>
        <Stack sx={{height: `100vh`}}>
            <Stack sx={{flex: 'auto', overflow: `auto`}}
                   direction={`row`}>
                <DefaultDrawer routeList={routeList}/>
                <DefaultContainer/>
            </Stack>
        </Stack>
    </>)
};

export default DefaultLayout;
