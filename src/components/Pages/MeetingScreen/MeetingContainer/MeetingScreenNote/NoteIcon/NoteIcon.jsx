import React from "react";
import Stack from "@mui/material/Stack";
import classes from "./NoteIcon.module.css";
import noteIcon from "../../../../../../Images/Bearish/note.svg";

const NoteIcon = () => {

    return (
        <>
            <Stack className={classes.noteIcon}>
                <Stack>
                    <img src={noteIcon} alt={''}/>
                </Stack>
            </Stack>
        </>
    )
};
export default NoteIcon;
