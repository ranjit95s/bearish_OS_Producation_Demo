import React, {useRef, useState} from "react";
import {Stack} from "@mui/material";
import Popover from "@mui/material/Popover/Popover";
import classes from "./StatusDropdown.module.css";
import {StatusIcon} from "../../../../Common/StatusDropdown/StatusIcon";
import ColorPicker from "../../../../Common/ColorPicker/ColorPicker";
import addIcon from "../../../../../Images/Bearish/add_circled.svg";
import pickerIcon from "../../../../../Images/Bearish/eye_dropper.svg";

const StatusDropdown = (props) => {
    const {handleSelect, statusArray, handleSelectPicker, handleSelectColor} = props;

    const pickerRef = useRef(null);

    return (
        <>
            <Stack className={classes.dropdown}>
                <Stack width={'100%'}>
                    <Stack padding={'10px'} gap={'10px'}>
                        {(statusArray || []).map((item, index) => (
                            <>
                                <Stack
                                    key={index}
                                    className={classes.statusItem}
                                >
                                    <Stack onClick={() => {
                                        handleSelect(item);
                                    }}>
                                        <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                                            <StatusIcon color={item.colorCode} width={'18px'}/>
                                            <Stack fontSize={'11px'}>
                                                {item.status}
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack ref={pickerRef}>
                                        <img
                                            style={{width: '10px', opacity: 0.3}}
                                            src={item.pickerIcon}
                                            alt={''}
                                            onClick={() => handleSelectPicker(index)}/>
                                        <Popover
                                            open={item.isOpen}
                                            anchorEl={pickerRef.current}
                                            onClose={() => handleSelectPicker(index)}
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
                                                    width: '210px',
                                                    height: '254px',
                                                    border: '1px solid #E9EDF2',
                                                    borderRadius: '5px'
                                                },
                                            }}
                                        >
                                            <ColorPicker
                                                handleSelectColor={(color) => handleSelectColor(color, index)}
                                                color={item.colorCode}/>
                                        </Popover>
                                    </Stack>
                                </Stack>

                            </>
                        ))}
                        <Stack className={classes.statusItem}>
                            <Stack>
                                <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                                    <img width={'15px'} src={addIcon} alt={''}/>
                                    <Stack fontSize={'11px'}>
                                        Add More
                                    </Stack>
                                </Stack>
                            </Stack>
                            <img
                                style={{width: '10px', opacity: 0.3}}
                                src={pickerIcon}
                                alt={''}/>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default StatusDropdown;
