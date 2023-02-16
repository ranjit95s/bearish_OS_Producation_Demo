import React, {useRef, useState} from "react";
import {Popover, Stack} from "@mui/material";
import classes from "./VideoScreenIcons.module.css";
import videoIcon from "../../../../../../Images/Bearish/video_recorder.svg";
import callEndIcon from "../../../../../../Images/Bearish/callend.svg";
import galleryIcon from "../../../../../../Images/Bearish/gallery.svg";
import micIcon from "../../../../../../Images/Bearish/mic.svg";
import tvIcon from "../../../../../../Images/Bearish/tv.svg";
import messagesIcon from "../../../../../../Images/Bearish/messages.svg";
import addPersonIcon from "../../../../../../Images/Bearish/addPerson.svg";
import AddPersonModal from "./AddPersonModal/AddPersonModal";

const VideoScreenIcons = () => {

    const addPersonRef = useRef(null);

    const [state, setState] = useState({
        mic: false,
        video: false,
        blur: false,
        shareScreen: false,
        addPerson: false,
        messages: false,
        callEnd: false,
    });

    const handleClickMic = () => {
        setState(pre => ({...pre, mic: !pre.mic}))
    };

    const handleClickVideo = () => {
        setState(pre => ({...pre, video: !pre.video}))
    };

    const handleClickBlur = () => {
        setState(pre => ({...pre, blur: !pre.blur}))
    };

    const handleClickShareScreen = () => {
        setState(pre => ({...pre, shareScreen: !pre.shareScreen}))
    };

    const handleClickAddPerson = () => {
        setState(pre => ({...pre, addPerson: !pre.addPerson}))
    };

    const handleCloseAddPersonModal = () => {
        setState(pre => ({...pre, addPerson: false}))
    };

    return (
        <>
            <Stack className={classes.iconMain}>
                <Stack
                    className={classes.iconBtn}
                    sx={{backgroundColor: state.mic ? '#febfbf' : '#FFF'}}
                    onClick={handleClickMic}>
                    <Stack>
                        <img src={micIcon} alt={''}/>
                    </Stack>
                </Stack>

                <Stack
                    className={classes.iconBtn}
                    sx={{backgroundColor: state.video ? '#febfbf' : '#FFF'}}
                    onClick={handleClickVideo}>
                    <Stack>
                        <img src={videoIcon} alt={''}/>
                    </Stack>
                </Stack>

                <Stack
                    className={classes.iconBtn}
                    sx={{backgroundColor: state.blur ? '#d7f8e7' : '#FFF'}}
                    onClick={handleClickBlur}>
                    <Stack>
                        <img src={galleryIcon} alt={''}/>
                    </Stack>
                </Stack>

                <Stack
                    className={classes.iconBtn}
                    sx={{backgroundColor: state.shareScreen ? '#d7f8e7' : '#FFF'}}
                    onClick={handleClickShareScreen}>
                    <Stack>
                        <img src={tvIcon} alt={''}/>
                    </Stack>
                </Stack>
                <Stack ref={addPersonRef}>
                    <Stack
                        className={classes.iconBtn}
                        sx={{backgroundColor: '#FFF'}}
                        onClick={handleClickAddPerson}>
                        <Stack>
                            <img src={addPersonIcon} alt={''}/>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack
                    className={classes.iconBtn}
                    sx={{backgroundColor: '#FFF'}}>
                    <Stack>
                        <img src={messagesIcon} alt={''}/>
                    </Stack>

                </Stack>

                <Stack
                    className={classes.iconBtn}
                    sx={{backgroundColor: '#febfbf'}}>
                    <Stack>
                        <img src={callEndIcon} alt={''}/>
                    </Stack>
                </Stack>
            </Stack>
            <Popover
                open={state.addPerson}
                anchorEl={addPersonRef.current}
                onClose={handleClickAddPerson}
                anchorOrigin={{
                    vertical: 'right',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    style: {
                        boxShadow: 'unset',
                        borderRadius: '5px',
                        margin: '-5px 0 0 15px',
                        backgroundColor: 'unset'
                    },
                }}
            >
                <AddPersonModal/>
            </Popover>
        </>
    )
};
export default VideoScreenIcons;
