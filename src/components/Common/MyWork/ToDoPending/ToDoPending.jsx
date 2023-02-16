import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import classes from "../ToDo.module.css";
import {Popover} from '@mui/material';
import nextIcon from "../../../../Images/Bearish/chevron_forward.svg";
import profile_circled from "../../../../Images/Bearish/profile_circled.svg";
import alarmIcon from "../../../../Images/Bearish/alarm.svg";
import multiSelectIcon from "../../../../Images/Bearish/multiselect.svg";
import redCloseIcon from "../../../../Images/Bearish/redCloseIcon.svg";
import greenRightIcon from "../../../../Images/Bearish/greenRightIcon.svg";

const ToDoPending = () => {

    const [pendingStatus, setPendingStatus] = useState({bgColor: '#FFA700', status: 'Pending', options: false});
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Stack direction={'row'}>
                <Stack className={classes.cardMain}>
                    <Stack className={classes.pendingList} gap={'5px'}>
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack fontSize={'15px'}>
                                Name of your Task
                            </Stack>
                            <Stack fontSize={'11px'}>
                                Workspace Name, Board
                            </Stack>
                        </Stack>
                        <Stack fontSize={'11px'}>
                            Due on 00/00/00
                        </Stack>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Stack fontSize={'11px'}>
                                Some of the details should appear here and this place
                            </Stack>
                            <Stack justifyContent={'flex-end'}>
                                <img alt={''} style={{width: '7px', cursor: 'pointer'}} src={nextIcon}/>
                            </Stack>
                        </Stack>
                        <Stack marginTop={'10px'}>
                            <Stack direction={'row'} justifyContent={'flex-end'} gap={'20px'}>
                                <Stack className={classes.pendingBottomBtn}>
                                    <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={profile_circled}/>
                                    <Stack fontSize={'11px'}>
                                        Assign to…
                                    </Stack>
                                </Stack>
                                <Stack className={classes.pendingBottomBtn}>
                                    <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={alarmIcon}/>
                                    <Stack fontSize={'11px'}>
                                        Due Date
                                    </Stack>
                                </Stack>
                                <Stack className={classes.pendingBottomBtn}>
                                    <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={multiSelectIcon}/>
                                    <Stack fontSize={'11px'}>
                                        Add Approvals
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={classes.pendingStatusMain}>
                    <Stack className={classes.pendingOptions}>
                        <Stack className={classes.pendingStatus} sx={{backgroundColor: pendingStatus.bgColor}}
                               onMouseEnter={(e) => {
                                   setAnchorEl(e.currentTarget);
                                   setPendingStatus(pre => ({...pre, options: true}))
                               }
                               }>
                            {pendingStatus.status}
                        </Stack>
                        {pendingStatus.options && <Popover
                            id={id}
                            open={open}
                            // open={pendingStatus.options}
                            anchorPosition={{top: 10}}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 18,
                                horizontal: 'right',
                            }}
                            PaperProps={{
                                style: {boxShadow: 'unset', backgroundColor: '#E9EDF2'},
                            }}
                        >
                            <Stack
                                onMouseLeave={() => setPendingStatus(pre => ({...pre, options: false}))}
                                   className={classes.options}>
                                <img alt={''} style={{cursor: 'pointer', width: '20px'}} src={redCloseIcon}
                                     onClick={() => setPendingStatus(pre => ({
                                         ...pre,
                                         options: false,
                                         bgColor: '#FF0000',
                                         status: 'Rejected'
                                     }))}/>
                                <img alt={''} style={{cursor: 'pointer', width: '20px'}} src={greenRightIcon}
                                     onClick={() => setPendingStatus(pre => ({
                                         ...pre,
                                         options: false,
                                         bgColor: '#5EE2A0',
                                         status: 'Approved'
                                     }))}/>
                            </Stack>
                        </Popover>}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default ToDoPending;
