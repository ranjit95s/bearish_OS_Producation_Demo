import React from "react";
import Stack from "@mui/material/Stack";
import {MyWork, QuickView} from "../../../Common/index";

const DashboardTopSelection = () => {

    return (
        <>
            <Stack direction={'row'} gap={'50px'}>
                <Stack width={'316px'}>
                    <MyWork/>
                </Stack>
                <Stack width={'316px'}>
                    <QuickView/>
                </Stack>
            </Stack>
        </>
    )
};
export default DashboardTopSelection;