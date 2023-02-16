import React, {useRef, useState} from "react";
import {Popover, Stack} from "@mui/material";
import classes from "./Dropdown.module.css";
import {PriorityIcon} from "./PriorityIcon";
import ColorPicker from "../ColorPicker/ColorPicker";
import upIcon from "../../../Images/Bearish/chevron_up.svg";
import downIcon from "../../../Images/Bearish/chevron_down.svg";
import addIcon from "../../../Images/Bearish/add_circled.svg";
import pickerIcon from "../../../Images/Bearish/eye_dropper.svg";

const PriorityDropdown = (props) => {

    const priorityRef = useRef(null);
    const pickerRef = useRef(null);

    const {placeholder = '', handleSelect, priorityArray, handleSelectPicker, handleSelectColor} = props;
    const [isOpen, setIsOpen] = useState({dropdown: false});

    const handleClose = () => {
        setIsOpen(pre => ({...pre, dropdown: false}));
    };

    const handleOpenDropdown = () => {
        setIsOpen(pre => ({...pre, dropdown: !pre.dropdown}))
    };

    const handleCloseColorPicker = () => {
        setIsOpen(pre => ({...pre, dropdown: !pre.dropdown}))
    };

    return (
        <>
            <Stack ref={priorityRef}>
                <Stack className={classes.selectView}>
                    <Stack className={classes.selectTab}
                           onClick={handleOpenDropdown}>
                        <Stack className={classes.selectName}>
                            {placeholder}
                        </Stack>
                        <img style={{opacity: 0.5}} src={isOpen.dropdown ? downIcon : upIcon} alt={''}/>
                    </Stack>
                </Stack>

                <Popover
                    open={isOpen?.dropdown}
                    anchorEl={priorityRef.current}
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
                            width: '133px',
                            height: '132px',
                            border: '1px solid #E9EDF2',
                            borderRadius: '5px'
                        },
                    }}
                >
                    <Stack className={classes.dropdown}>
                        <Stack width={'100%'}>
                            <Stack padding={'10px'} gap={'10px'}>
                                {(priorityArray || []).map((item, index) => (
                                    <>
                                        <Stack
                                            key={index}
                                            className={classes.priorityItem}
                                        >
                                            <Stack onClick={() => {
                                                handleSelect(item);
                                                setIsOpen(pre => ({...pre, dropdown: false}))
                                            }}>
                                                <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                                                    <Stack width={'12px'} height={'12px'}>
                                                        <PriorityIcon color={item.colorCode} width={'100%'}/>
                                                    </Stack>
                                                    <Stack fontSize={'11px'}>
                                                        {item.priority}
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
                                <Stack className={classes.addMore}>
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
export default PriorityDropdown;
