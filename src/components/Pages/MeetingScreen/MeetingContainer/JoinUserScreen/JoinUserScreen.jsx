import React from "react";
import Stack from "@mui/material/Stack";
import classes from "./JoinUserScreen.module.css";

const JoinUserScreen = () => {

    return (
        <>
            <Stack direction={'row'} gap={'25px'}>
                <Stack className={classes.screen1}>
                    <Stack className={classes.userIcon}>
                        MK
                    </Stack>
                </Stack>
                {/*<Stack className={classes.screen1}>*/}
                {/*    <Stack className={classes.userIcon}>*/}
                {/*        HT*/}
                {/*    </Stack>*/}
                {/*</Stack>*/}
                <Stack className={classes.screen2}>

                </Stack>
            </Stack>
        </>
    )
};
export default JoinUserScreen;
