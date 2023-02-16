import React from "react";
import {Stack} from "@mui/material";
import classes from "./AttachmentsUser.module.css";

const INITIAL_ARRAY = [{name: 'Milan Kodinariya'}, {name: 'Milan Kodinariya'}, {name: 'Milan Kodinariya'}];

const AttachmentsUser = () => {
    const searchUserName = (name) => {
        const userName = name.split(" ");
        return userName?.[0]?.charAt(0).toLocaleUpperCase() + "" + userName?.[1]?.charAt(0).toLocaleUpperCase()
    };
    return (
        <>
            <Stack direction={'row'} gap={'5px'}>
                {(INITIAL_ARRAY || []).map((item, index) => (
                    <Stack key={index} className={classes.attachmentsUserIcon}>
                        {searchUserName(item.name)}
                    </Stack>
                ))}
                <Stack className={classes.moreIcon}>
                    More
                </Stack>
            </Stack>
        </>
    )
};
export default AttachmentsUser;