import React, {useRef, useState} from "react";
import {Stack} from "@mui/material";
import classes from "./StatusDropdown.module.css";
import {StatusIcon} from "./StatusIcon";
import ColorPicker from "../ColorPicker/ColorPicker";
import upIcon from "../../../Images/Bearish/chevron_up.svg";
import downIcon from "../../../Images/Bearish/chevron_down.svg";
import addIcon from "../../../Images/Bearish/add_circled.svg";
import pickerIcon from "../../../Images/Bearish/eye_dropper.svg";
import Popover from "@mui/material/Popover/Popover";

const StatusDropdown = (props) => {
    const statusRef = useRef(null);
    const pickerRef = useRef(null);
    const {placeholder = '', handleSelect, statusArray, handleSelectPicker, handleSelectColor} = props;
    const [isOpen, setIsOpen] = useState({dropdown: false});
    return (
        <>
            <Stack ref={statusRef}>
                <Stack className={classes.selectView}>
                    <Stack className={classes.selectTab}
                           onClick={(e) => setIsOpen(pre => ({...pre, dropdown: !pre.dropdown}))}>
                        <Stack className={classes.selectName}>
                            {placeholder}
                        </Stack>
                        <img style={{opacity: 0.5}} src={isOpen.dropdown ? downIcon : upIcon} alt={''}/>
                    </Stack>
                </Stack>
                <Popover
                    open={isOpen.dropdown}
                    anchorEl={statusRef.current}
                    onClose={() => setIsOpen(pre => ({...pre, dropdown: false}))}
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
                            width: '133px',
                            height: 'auto',
                            border: '1px solid #E9EDF2',
                            borderRadius: '5px'
                        },
                    }}
                >
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
                                                setIsOpen(pre => ({...pre, dropdown: false}))
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
                                                            height: '233px',
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
                </Popover>
            </Stack>
        </>
    )
};
export default StatusDropdown;
