import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import CallCenterMeetingMenu from "./CallCenterBox/CallCenterMeetingMenu";
import MeetingVideoScreen from "./MeetingVideoScreen/MeetingVideoScreen";
import CopyMeetingLink from "./CopyMeetinLink/CopyMeetingLink";
import JoinUserScreen from "./JoinUserScreen/JoinUserScreen";
import MeetingScreenNote from "./MeetingScreenNote/MeetingScreenNote";
import MeetingInformationModal from "./MeetingInformationModal/MeetingInformationModal";
import MeetingInformation from "./MeetingInformation/MeetingInformation";

const MeetingContainer = () => {

    const [state, setState] = useState({callCenterBox: false});
    return (
        <>
            <Stack direction={'row'} gap={'35px'}>
                <Stack width={'325px'} gap={'20px'}>
                    <Stack direction={'row'} gap={'20px'}>
                        <CallCenterMeetingMenu open={state.callCenterBox} setState={setState}/>
                        <MeetingScreenNote/>
                    </Stack>
                    <Stack>
                        <MeetingInformationModal/>
                    </Stack>
                </Stack>
                <Stack gap={'20px'}>
                    <Stack direction={'row'} gap={'20px'}>
                        <MeetingVideoScreen/>
                        <MeetingInformation/>
                    </Stack>
                    <CopyMeetingLink/>
                    <JoinUserScreen/>
                </Stack>
            </Stack>
        </>
    )
};

export default MeetingContainer;
