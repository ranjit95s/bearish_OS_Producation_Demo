import React, {useRef, useState} from "react";
import classes from "./Dropdown.module.css";
import {Stack} from "@mui/material";
import downIcon from "../../../Images/Bearish/chevron_down.svg";
import upIcon from "../../../Images/Bearish/chevron_up.svg";
import Popover from "@mui/material/Popover/Popover";

const INITIAL_ARRAY = [
    {name: 'Name - Lists'},
    {name: 'Name - Boards'},
    {name: 'Name - Checklist'},
    {name: 'Name - Whiteboard'},
    {name: 'Name - Note'},
    {name: 'Name - Docs and Wikis'}

]

const HierarchyDropdown = (props) => {
    const drop1Ref = useRef();
    const drop2Ref = useRef();
    const {placeholder, handleSelect} = props;
    const [isOpen, setIsOpen] = useState({drop1: false, drop2: false});

    return (
        <>
            <Stack className={classes.selectView} ref={drop1Ref}>
                <Stack className={classes.selectTab} onClick={(e) => setIsOpen(pre => ({...pre, drop1: !pre.drop1}))}>
                    <Stack className={classes.selectName}>
                        {placeholder}
                    </Stack>
                    <img style={{opacity: 0.5}} src={isOpen.drop1 ? downIcon : upIcon} alt={''}/>
                </Stack>
                <Popover
                    open={isOpen.drop1}
                    anchorEl={drop1Ref.current}
                    onClose={() => setIsOpen(pre => ({...pre, drop1: false}))}
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
                            width: '225px',
                            height: 'auto',
                            border: '1px solid #E9EDF2',
                            borderRadius: '5px',
                            marginTop: '5px'
                        },
                    }}
                >
                    <Stack className={classes.dropdown}>
                        <Stack gap={'5px'} padding={'10px'} ref={drop2Ref}>
                            <Stack className={classes.selectTabDrop2}
                                   onClick={(e) => setIsOpen(pre => ({...pre, drop2: !pre.drop2}))}>
                                <img style={{opacity: 0.5}} src={isOpen.drop2 ? downIcon : upIcon} alt={''}/>
                                <Stack fontWeight={600} fontSize={'12px'} justifyContent={'center'}>
                                    Workspace Name
                                </Stack>
                            </Stack>
                            <Popover
                                open={isOpen.drop2}
                                anchorEl={drop2Ref.current}
                                onClose={() => setIsOpen(pre => ({...pre, drop2: false}))}
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
                                        width: '225px',
                                        height: 'auto',
                                    },
                                }}
                            >
                                <Stack padding={'5px 10px 10px 15px'} gap={'14px'}>
                                    {(INITIAL_ARRAY || []).map((item, index) => (
                                        <Stack
                                            key={index}
                                            className={classes.workspaceListItem}
                                            onClick={() => {
                                                handleSelect(item);
                                                setIsOpen(() => ({drop1: false, drop2: false}))
                                            }}>
                                            {item.name}
                                        </Stack>
                                    ))}
                                </Stack>
                            </Popover>
                        </Stack>
                    </Stack>
                </Popover>

            </Stack>
        </>
    )
};
export default HierarchyDropdown;
