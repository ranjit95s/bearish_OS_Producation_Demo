import React, {useRef, useState} from "react";
import Stack from "@mui/material/Stack";
import classes from "./MeetingInformation.module.css";
import closeIcon from "../../../../../Images/Bearish/close_circled.svg"
import groupIcon from "../../../../../Images/Bearish/group.svg"
import copyIcon from "../../../../../Images/Bearish/copy.svg"
import {Popover} from "@mui/material";
import AddGuest from "./AddGuest/AddGuest";

const MeetingInformationModal = () => {

    const addGuestsRef = useRef(null);

    const [state, setState] = useState({addGuest: false});

    const handleAddGuestModal = () => setState(pre => ({...pre, addGuest: !pre.addGuest}));

    return (
        <>
            <Stack className={classes.meetingInfoMain}>
                <Stack padding={'16px 18px 17px 15px'}>
                    <Stack gap={'10px'}>
                        <Stack className={classes.titleMain}>
                            <Stack className={classes.title}>
                                Here’s your meeting information…
                            </Stack>
                            <img src={closeIcon} alt={''}/>
                        </Stack>
                        <Stack className={classes.description}>
                            This meeting has been created and added to your calendar. Share this link with people so
                            they can join the meeting, or send an invite below.
                        </Stack>
                        <Stack className={classes.addGuestsMain} ref={addGuestsRef}>
                            <img width={'15px'} src={groupIcon} alt={''} onClick={handleAddGuestModal}/>
                            <Stack className={classes.addGuests} onClick={handleAddGuestModal}>
                                Add Guests
                            </Stack>
                            <Popover
                                open={state.addGuest}
                                anchorEl={addGuestsRef.current}
                                onClose={handleAddGuestModal}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                PaperProps={{
                                    style: {
                                        boxShadow: 'unset',
                                        width: 'auto',
                                        height: 'auto',
                                        border: '1px solid #E9EDF2',
                                        background: '#FFFFFF 0% 0% no-repeat padding-box',
                                        borderRadius: '5px',
                                        marginTop: '10px'
                                    },
                                }}>
                                <AddGuest/>
                            </Popover>
                        </Stack>
                        <Stack className={classes.linkMain}>
                            <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                                <Stack className={classes.linkName}>
                                    Link:
                                </Stack>
                                <Stack className={classes.link}>
                                    app.bearishos.com/call-randomuuid
                                </Stack>
                            </Stack>
                            <img width={'20px'} src={copyIcon} alt={''}/>
                        </Stack>
                        <Stack className={classes.passcodeMain}>
                            <Stack className={classes.linkName}>
                                Passcode:
                            </Stack>
                            <Stack className={classes.passcode}>
                                ##-######
                            </Stack>
                        </Stack>
                        <Stack className={classes.viewGuestsInWaitingRoom}>
                            View guests in waiting room
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default MeetingInformationModal;
