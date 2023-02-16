import React from "react";
import Stack from "@mui/material/Stack";
import classes from "./AddPersonModal.module.css";
import greenMic from "../../../../../../../Images/Bearish/mic-Green.svg";
import redMic from "../../../../../../../Images/Bearish/mic-Red.svg";
import profile_circled from "../../../../../../../Images/Bearish/profile_circled-sky.svg";
import greenVideo from "../../../../../../../Images/Bearish/video-Green.svg";
import redVideo from "../../../../../../../Images/Bearish/video-Red.svg";
import greenCheck from "../../../../../../../Images/Bearish/check-Green.svg";
import redClose from "../../../../../../../Images/Bearish/close_circled-Red.svg";

const INITIAL_GUESTS = [
    {
        userIcon: profile_circled,
        name: 'First Last Name',
        micIcon: greenMic,
        videoIcon: greenVideo
    }, {
        userIcon: profile_circled,
        name: 'First Last Name',
        micIcon: redMic,
        videoIcon: redVideo
    }, {
        userIcon: profile_circled,
        name: 'First Last Name',
        micIcon: greenMic,
        videoIcon: redVideo
    },
];

const INITIAL_WAITING_ROOM = [
    {
        userIcon: profile_circled,
        name: 'First Last Name',
        checkIcon: greenCheck,
        closeIcon: redClose
    }, {
        userIcon: profile_circled,
        name: 'First Last Name',
        checkIcon: greenCheck,
        closeIcon: redClose
    }, {
        userIcon: profile_circled,
        name: 'First Last Name',
        checkIcon: greenCheck,
        closeIcon: redClose
    },
];

const AddPersonModal = () => {

    return (
        <>
            <Stack className={classes.addPersonModalMain}>
                <Stack padding={'17px 14px 14px 20px'} gap={'10px'}>
                    <Stack gap={'10px'}>
                        <Stack className={classes.title}>
                            Guests
                        </Stack>
                        {(INITIAL_GUESTS || []).map((value, index) => (
                            <Stack key={index} direction={'row'} justifyContent={'space-between'}>
                                <Stack direction={'row'} gap={'10px'}>
                                    <img src={value.userIcon} alt={''}/>
                                    <Stack className={classes.name}>
                                        {value.name}
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} gap={'10px'}>
                                    <img src={value.micIcon} alt={''}/>
                                    <img src={value.videoIcon} alt={''}/>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                    <Stack gap={'10px'}>
                        <Stack className={classes.title}>
                            Waiting Room
                        </Stack>
                        {(INITIAL_WAITING_ROOM || []).map((value, index) => (
                            <Stack key={index} direction={'row'} justifyContent={'space-between'}>
                                <Stack direction={'row'} gap={'10px'}>
                                    <img src={value.userIcon} alt={''}/>
                                    <Stack className={classes.name}>
                                        {value.name}
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} gap={'10px'}>
                                    <img src={value.checkIcon} alt={''}/>
                                    <img src={value.closeIcon} alt={''}/>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};

export default AddPersonModal;
