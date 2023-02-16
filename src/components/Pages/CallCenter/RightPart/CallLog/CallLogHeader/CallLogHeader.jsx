import React, {useRef, useState} from "react";
import {Stack} from "@mui/material";
import moment from "moment";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import classes from "./CallLogHeader.module.css";
import calendarIcon from "../../../../../../Images/Bearish/calendar-pink.svg";
import searchIcon from "../../../../../../Images/Bearish/search.svg";
import Popover from "@mui/material/Popover/Popover";
import SearchModal from "./SearchModal/SearchModal";

const CallLogHeader = () => {

    const searchRef = useRef(null);

    const [state, setState] = useState({selectDate: new Date(), datePicker: false, modal: false});

    const handleDateChange = async (date) => {
        setState(pre => ({...pre, selectDate: date, datePicker: false}));
    };

    const handleClickCalendar = () => {
        setState(pre => ({...pre, datePicker: true}));
    };

    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack direction={'row'} gap={'32px'} alignItems={'center'}>
                    <Stack className={classes.titleAndDate}>
                        Call Log
                    </Stack>
                    <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                        <Stack className={classes.titleAndDate}>
                            {moment(new Date(state.selectDate)).format('LL')}
                        </Stack>
                        <Stack width={'25px'} height={'25px'}>
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
                        </Stack>
                    </Stack>
                </Stack>
                <Stack ref={searchRef}>
                    <img width={'100%'} height={'100%'} src={searchIcon} alt={''}
                         onClick={() => setState(pre => ({...pre, modal: true}))}/>
                    <Popover
                        open={state.modal}
                        anchorEl={searchRef.current}
                        onClose={() => setState(pre => ({...pre, modal: false}))}
                        anchorOrigin={{
                            vertical: 'bottom',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        PaperProps={{
                            style: {
                                boxShadow: 'unset',
                                width: 'auto',
                                height: 'auto',
                                border: '1px solid #E9EDF2',
                                borderRadius: '5px',
                                marginTop: '13px'
                            },
                        }}>
                        <SearchModal/>
                    </Popover>
                </Stack>
            </Stack>
        </>
    )
};
export default CallLogHeader;
