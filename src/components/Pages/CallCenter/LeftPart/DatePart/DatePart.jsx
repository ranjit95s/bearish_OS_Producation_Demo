import React, {useState} from "react";
import {Stack} from "@mui/material";
import moment from "moment";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import classes from "./DatePart.module.css";
import calendarIcon from "../../../../../Images/Bearish/calendar-pink.svg"
import nextIcon from "../../../../../Images/Bearish/chevron_forward.svg"
import backIcon from "../../../../../Images/Bearish/chevron_backward.svg"

const DatePart = () => {

    const [state, setState] = useState({selectDate: new Date(), datePicker: false});

    const handleDateChange = async (date) => {
        setState(pre => ({...pre, selectDate: date, datePicker: false}));
    };

    const handleClickCalendar = () => {
        setState(pre => ({...pre, datePicker: true}));
    };

    const handleNextDate = async (date) => {
        const day = new Date(date);
        const nextDay = new Date(day);
        const nextDayGMTFormat = new Date(nextDay.setDate(day.getDate() + 1));
        setState(pre => ({...pre, selectDate: nextDayGMTFormat}));
    };

    const handlePreviousDate = async (date) => {
        const day = new Date(date);
        const nextDay = new Date(day);
        const previousDayGMTFormat = new Date(nextDay.setDate(day.getDate() - 1));
        setState(pre => ({...pre, selectDate: previousDayGMTFormat}));
    };

    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack className={classes.date}>
                    {moment(new Date(state.selectDate)).format('LL')}
                </Stack>
                <Stack direction={'row'} gap={'10px'}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            open={state.datePicker}
                            value={state.selectDate}
                            onClose={() => setState(pre => ({...pre, datePicker: false}))}
                            onChange={(newValue) => handleDateChange(newValue)}
                            renderInput={({inputRef}) => (
                                <img ref={inputRef} width={'100%'} height={'100%'}
                                     src={calendarIcon} alt={''}
                                     onClick={handleClickCalendar}/>
                            )}
                        />
                    </LocalizationProvider>
                    <img style={{cursor: 'pointer'}} src={backIcon} alt={''}
                         onClick={() => handlePreviousDate(state.selectDate)}/>
                    <img style={{cursor: 'pointer'}} src={nextIcon} alt={''}
                         onClick={() => handleNextDate(state.selectDate)}/>
                </Stack>
            </Stack>
        </>
    )
};
export default DatePart;
