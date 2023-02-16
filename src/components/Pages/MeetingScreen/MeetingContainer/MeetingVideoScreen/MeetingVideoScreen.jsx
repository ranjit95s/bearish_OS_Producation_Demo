import React from "react";
import {Stack} from "@mui/material";
import classes from "./MeetingVideoScreen.module.css";
import VideoScreenIcons from "./VideoScreenIcons/VideoScreenIcons";

const MeetingVideoScreen = () => {

    return (
        <>
            <Stack className={classes.videoScreenMain}>
                {/*<video height={'100%'} width={'100%'} controls src={'https://static.vecteezy.com/system/resources/previews/002/184/312/mp4/vanessa-cardui-butterfly-in-nature-on-yellow-flowers-free-video.mp4'} />*/}
                <VideoScreenIcons/>
            </Stack>
        </>
    )
};
export default MeetingVideoScreen;
