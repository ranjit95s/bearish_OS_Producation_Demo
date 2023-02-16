import React, {useRef, useState} from "react";
import {Popover, Stack} from "@mui/material";
import classes from "../Rows.module.css";
import profile_circled from "../../../../../Images/Bearish/profile_circled.svg";
import alarmIcon from "../../../../../Images/Bearish/alarm.svg";
import multiSelectIcon from "../../../../../Images/Bearish/multiselect.svg";
import AssignToModal from "./AssignTo/AssignToModal";
import DrawerOptions from "../../../../Layout/DefaultLayout/components/DrawerSubMenu/DrawerOptions";
import CreateWorkSpace from "../../../../Layout/DefaultLayout/components/DrawerSubMenu/CreateWorkSpace";
import Approvals from "./Approvals/Approvals";

const BottomMenu = ({handleAddRow}) => {

    const approvalsRef = useRef(null);

    const [state, setState] = useState({assignTo: false});
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseApprovals = () => {
        setState(pre => ({...pre, approvals: false}));
    };

    return (
        <>
            <Stack marginLeft={'30px'} direction={'row'} gap={'20px'}>
                <Stack className={classes.addBtn} onClick={handleAddRow}>
                    Add
                </Stack>
                <Stack className={classes.bottomOptions}
                       onClick={(event) => {
                           setAnchorEl(event.currentTarget);
                           setState(pre => ({...pre, assignTo: !pre.assignTo}))
                       }}>
                    <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={profile_circled}/>
                    <Stack fontSize={'11px'}>
                        Assign to…
                    </Stack>
                    {state.assignTo && <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
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
                                width: '150px',
                                height: '185px',
                                border: '1px solid #E9EDF2',
                                borderRadius: '5px'
                            },
                        }}
                    >
                        <AssignToModal/>

                    </Popover>}
                </Stack>
                <Stack className={classes.bottomOptions}>
                    <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={alarmIcon}/>
                    <Stack fontSize={'11px'}>
                        Due Date
                    </Stack>

                    <Stack ref={approvalsRef} className={classes.bottomOptions} onClick={(event) => {
                        setState(pre => ({...pre, approvals: true}))
                    }}>
                        <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={multiSelectIcon}/>
                        <Stack fontSize={'11px'}>
                            Add Approvals
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>
            <Popover
                open={state?.approvals}
                anchorEl={approvalsRef.current}
                onClose={handleCloseApprovals}
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
                        width: '150px',
                        height: 'auto',
                        border: '1px solid #E9EDF2',
                        borderRadius: '5px'
                    },
                }}
            >
                <Approvals/>

            </Popover>
        </>
    )
};
export default BottomMenu;
