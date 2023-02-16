import React from "react";
import CallCommonCard from "../CommonCard";
import calendarIcon from "../../../../../../Images/Bearish/calendar-white.svg"

const TodayEvent = () => {

    return (
        <>
            <CallCommonCard icon={calendarIcon} title={'Upcoming Calls'} bgColor={'#d37aa9'} color={'#ac0057'}/>
        </>
    )
};
export default TodayEvent;