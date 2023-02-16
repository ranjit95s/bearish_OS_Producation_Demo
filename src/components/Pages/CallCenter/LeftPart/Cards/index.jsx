import React from "react";
import {Stack} from "@mui/material";
import UpcomingCallCard from "./UpcomingCall/UpcomingCall";
import TodayEvent from "./TodayEvent/TodayEvent";
import TaskToDo from "./TaskToDo/TaskToDo";
import OpenLeads from "./OpenLeads/OpenLeads";

const Cards = () => {

    return (
        <>
            <Stack gap={'10px'}>
                <Stack direction={'row'} gap={'20px'}>
                    <UpcomingCallCard/>
                    <TodayEvent/>
                </Stack>
                <Stack direction={'row'} gap={'20px'}>
                    <TaskToDo/>
                    <OpenLeads/>
                </Stack>
            </Stack>
        </>
    )
};
export default Cards;