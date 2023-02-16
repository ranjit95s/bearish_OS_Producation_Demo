import React from "react";
import CallCommonCard from "../CommonCard";
import videoIcon from "../../../../../../Images/Bearish/video_recorder-white.svg"

const UpcomingCallCard = () => {

    return (
        <>
            <CallCommonCard icon={videoIcon} title={'Upcoming Calls'} bgColor={'#79cefc'} color={'#00a7ff'} />
        </>
    )
};
export default UpcomingCallCard;