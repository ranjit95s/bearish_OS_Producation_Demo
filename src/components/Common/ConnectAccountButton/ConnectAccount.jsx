import React from "react";
import {Stack} from "@mui/material";
import classes from "./ConnectAccount.module.css";

const ConnectAccount = ({name}) => {
    return (
        <>
            <Stack alignItems={'center'} marginBottom={'20px'}>
                <Stack className={classes.connectAccount}>
                    <Stack sx={{opacity: 0.6}}>
                        {name}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default ConnectAccount;