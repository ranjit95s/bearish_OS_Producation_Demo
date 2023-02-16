import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import CallCenterMeetingMenu from "../MeetingScreen/MeetingContainer/CallCenterBox/CallCenterMeetingMenu";
import NameOfMeeting from "./NameOfMeeting/NameOfMeeting";

const ViewEventCard = () => {
    const [state, setState] = useState({callCenterBox: true});
    return (
        <>
            <Stack padding={'18px 30px'}>
                <Stack gap={'20px'}>
                    <NameOfMeeting/>
                    <CallCenterMeetingMenu open={state.callCenterBox} setState={setState}/>
                </Stack>
            </Stack>
        </>
    )
};
export default ViewEventCard;
