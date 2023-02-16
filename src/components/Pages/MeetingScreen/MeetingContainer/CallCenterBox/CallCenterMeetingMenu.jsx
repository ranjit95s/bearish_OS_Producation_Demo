import React from "react";
import Stack from "@mui/material/Stack";
import BoxIcon from "./BoxIcon";
import MeetingMenu from "./MeetingMenu/MeetingMenu";

const CallCenterMeetingMenu = ({open, setState}) => {

    const handleClickIcon = () =>    {
        setState(pre => ({...pre, callCenterBox: !pre.callCenterBox}));
    };

    return (
        <>
            <Stack>
                <Stack position={'relative'}>
                    <Stack onClick={handleClickIcon}>
                        {!open && <BoxIcon/>}
                    </Stack>
                    {open && <Stack sx={{position: 'absolute', zIndex: 2}}>
                        <MeetingMenu handleClose={handleClickIcon}/>
                    </Stack>}
                </Stack>
            </Stack>
        </>
    )
};
export default CallCenterMeetingMenu;
