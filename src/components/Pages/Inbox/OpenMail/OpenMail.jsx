import React from "react";
import Stack from "@mui/material/Stack";
import TopBar from "./TopBar/TopBar";
import EmailContent from "./EmailContent/EmailContent";
import ComposeButton from "../EmailList/EmailTopBar/ComposeButton/ComposeButton";
import ShowEmail from "../ShowLeftSideEmail/ShowEmail";
import classes from "./OpenMail.module.css";

const OpenMail = () => {
    return (
        <>
            <Stack className={classes.openMainMain}>
                <Stack>
                    <ComposeButton/>
                    <Stack className={classes.sideMailList}>
                        <ShowEmail/>
                    </Stack>

                </Stack>
                <Stack width={'100%'}>
                    <TopBar/>
                    <EmailContent/>
                </Stack>
            </Stack>
        </>
    )
};
export default OpenMail;
