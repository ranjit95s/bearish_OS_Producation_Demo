import React, {useState} from "react";
import classes from "./UpComingCalls.module.css";
import Stack from "@mui/material/Stack";
import moment from "moment";
import leftIcon from "../../../Images/Bearish/chevron_backward.svg";
import rightIcon from "../../../Images/Bearish/chevron_forward.svg";
import userIcon from "../../../Images/Bearish/profile_circled.svg";
import playIcon from "../../../Images/Bearish/play.svg";
import bagIcon from "../../../Images/Bearish/briefcase.svg";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";

const INITIAL_ARRAY = [{
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}];

const UpComingCalls = () => {
    const [state, setState] = useState(INITIAL_ARRAY);
    const [datePicker, setDatePicker] = useState({selectDate: new Date(), datePicker: false});

    const handleNextDate = async (date) => {
        const day = new Date(date);
        const nextDay = new Date(day);
        const nextDayGMTFormat = new Date(nextDay.setDate(day.getDate() + 1));
        setDatePicker(pre => ({...pre, selectDate: nextDayGMTFormat}));
    };

    const handlePreviousDate = async (date) => {
        const day = new Date(date);
        const nextDay = new Date(day);
        const previousDayGMTFormat = new Date(nextDay.setDate(day.getDate() - 1));
        setDatePicker(pre => ({...pre, selectDate: previousDayGMTFormat}));
    };

    const handleDateChange = async (date) => {
        setDatePicker(pre => ({...pre, selectDate: date, datePicker: false}));
    };
    const handleOpenDatePicker = () => setDatePicker(pre => ({...pre, datePicker: true}));

    return (
        <>
            <Stack className={classes.unComingCallsMain}>
                <Stack direction={'row'} justifyContent={'space-between'} paddingRight={'10px'}>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            open={datePicker.datePicker}
                            value={datePicker.selectDate}
                            onClose={() => setState(pre => ({...pre, datePicker: false}))}
                            onChange={(newValue) => handleDateChange(newValue)}
                            renderInput={({inputRef}) => (
                                <Stack ref={inputRef} className={classes.eventName}>
                                    {moment(new Date(datePicker.selectDate)).format('LL')}
                                </Stack>
                            )}
                        />
                    </LocalizationProvider>
                    <Stack direction={'row'} gap={'30px'}>
                        <img alt={''} style={{cursor: 'pointer'}} src={leftIcon}
                             onClick={() => handlePreviousDate(datePicker.selectDate)}/>
                        <img alt={''} src={rightIcon} style={{cursor: 'pointer'}}
                             onClick={() => handleNextDate(datePicker.selectDate)}/>
                    </Stack>
                </Stack>
                <Stack sx={{overflowY: 'auto'}}>
                    <Stack width={'316px'}>
                        {(state || []).map((item, i) => (
                            <Stack key={i} className={classes.eventContent}>
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <Stack className={classes.nameOfEvent}>
                                        {item.eventName}
                                    </Stack>
                                    <Stack className={classes.editEvent}>
                                        Edit
                                    </Stack>
                                </Stack>
                                <Stack className={classes.dateTime}>
                                    {item.dateTime}
                                </Stack>
                                <Stack className={classes.invitees}>
                                    {item.invitees}
                                </Stack>
                                <Stack direction={'row'} gap={'20px'} justifyContent={'flex-end'}>
                                    <img alt={''} style={{cursor: 'pointer'}} src={bagIcon}/>
                                    <img alt={''} style={{cursor: 'pointer'}} src={userIcon}/>
                                    <img alt={''} style={{cursor: 'pointer'}} src={playIcon}/>
                                </Stack>
                                <Stack className={classes.darkLine}/>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default UpComingCalls;
