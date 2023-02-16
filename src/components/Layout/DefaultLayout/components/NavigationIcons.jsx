import React from "react";
import {Stack} from "@mui/material";
import calendarIcon from "../../../../Images/Bearish/calendar-pink.svg"
import notificationIcon from "../../../../Images/Bearish/notification.svg"

const NavigationIcons = () => {
    return (
        <>
            <Stack direction={'row'} gap={'15px'} fontFamily={'Source Serif Pro'}>
                <Stack direction={'row'} gap={'10px'}>
                    <img width={'25px'} src={calendarIcon} alt={''}/>
                    <Stack fontSize={'18px'} justifyContent={'center'}>
                        Calendars
                    </Stack>
                </Stack>
                <Stack sx={{height: '40px', border: '1px solid #E3E3E3'}} />
                <Stack direction={'row'} gap={'10px'}>
                    <img width={'25px'} src={notificationIcon} alt={''}/>
                    <Stack fontSize={'18px'} justifyContent={'center'}>
                        Notification
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default NavigationIcons;
