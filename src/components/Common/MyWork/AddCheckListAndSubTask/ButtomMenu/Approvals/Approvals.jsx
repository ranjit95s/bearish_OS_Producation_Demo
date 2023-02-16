import React from "react";
import {Stack} from "@mui/material";
import classes from "./Approvals.module.css";

const Approvals = () => {
    const searchUserName = (name) => {
        const userName = name.split(" ");
        return userName?.[0].charAt(0).toLocaleUpperCase() + "" + userName?.[1].charAt(0).toLocaleUpperCase()
    };
    return (
        <>
            <Stack fontFamily={'Source Serif Pro'}>
                <Stack gap={'10px'} height={'100%'} padding={'10px 5px'}>
                    <Stack>
                        <Stack height={'100%'} justifyContent={'space-between'}>
                            <Stack gap={'5px'}>
                                <Stack className={classes.itemMain}>
                                    <Stack direction={'row'} gap={'4px'}>
                                        <Stack className={classes.userIcon}>
                                            {searchUserName('T U')}
                                        </Stack>
                                        <Stack className={classes.searchUserName}>
                                            Users User Name
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack fontSize={'11px'}>
                                    Requesting Approval From
                                </Stack>
                                <Stack className={classes.itemMain}>
                                    <Stack direction={'row'} gap={'4px'}>
                                        <Stack className={classes.userIcon}>
                                            {searchUserName('T U')}
                                        </Stack>
                                        <Stack className={classes.searchUserName}>
                                            First and Last Name
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack alignItems={'center'}>
                        <Stack className={classes.assignNowBtn}>
                            Request Now
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default Approvals;
