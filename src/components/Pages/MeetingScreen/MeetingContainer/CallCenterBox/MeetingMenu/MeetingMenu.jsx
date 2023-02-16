import React, {useRef, useState} from "react";
import Stack from "@mui/material/Stack";
import classes from "./CenterBox.module.css"
import backIcon from "../../../../../../Images/Bearish/chevron_backward.svg"
import {Popover} from "@mui/material";
import AddModal from "./AddModal/AddModal";
import Workspace from "./Workspace/Workspace";

const INITIAL_ARRAY = [
    {
        name: 'Agenda',
        width: '65px',
        select: false
    }, {
        name: 'Notes',
        width: '65px',
        select: false
    }, {
        name: 'Workspace',
        width: '93px',
        select: false
    }, {
        name: 'Up Next',
        width: '70px',
        select: false
    },
];

const MeetingMenu = ({handleClose}) => {

    const addRef = useRef(null);

    const [state, setState] = useState(INITIAL_ARRAY);
    const [addModal, setAddModal] = useState({modal: false});
    const [select, setSelect] = useState({name: ''});

    const handleSelect = (selectIndex, selectArray) => {
        setSelect(pre => ({name: selectArray.name}));
        setState(pre => pre.map((eachOption, eachOptionIndex) => {
            return eachOptionIndex === selectIndex ?
                {
                    ...eachOption,
                    select: true
                } : {
                    ...eachOption,
                    select: false
                }
        }))
    };

    const handleAddModal = () => {
        setAddModal(pre => ({...pre, modal: !pre.modal}))
    };

    return (
        <>
            <Stack className={classes.centerBoxMain}>
                <Stack padding={'28px 12px 28px 13px'}>
                    <Stack gap={'24px'}>
                        <Stack className={classes.meetingNameMain}>
                            <Stack className={classes.meetingName}>
                                Meeting Name
                            </Stack>
                            <Stack className={classes.btnMain}>
                                <Stack ref={addRef}>
                                    <Stack className={classes.addBtn} onClick={handleAddModal}>
                                        Add
                                    </Stack>
                                    <Popover
                                        open={addModal.modal}
                                        anchorEl={addRef.current}
                                        onClose={handleAddModal}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        PaperProps={{
                                            style: {
                                                width: 'auto',
                                                height: 'auto',
                                                border: '1px solid #E9EDF2',
                                                borderRadius: '5px',
                                                boxShadow: 'inset 0px 3px 6px #00000029, 0px 3px 6px #00000029',
                                                marginTop: '15px'
                                            },
                                        }}
                                    >
                                        <AddModal/>
                                    </Popover>
                                </Stack>
                                <Stack width={'25px'} height={'25px'}>
                                    <img src={backIcon} width={'100%'} height={'100%'} alt={''} onClick={handleClose}/>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack gap={'20px'}>
                            <Stack direction={'row'} padding={'0 5px 0 1px'}>
                                {(state || []).map((value, index, array) => (
                                    <Stack
                                        key={index}
                                        onClick={() => handleSelect(index, array[index])}
                                        className={value.select ? classes.selectedOption : classes.selectOptions}
                                        sx={{width: value.width}}>
                                        {value.name}
                                    </Stack>
                                ))}
                            </Stack>
                            {select.name === 'Workspace' && <Workspace/>}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default MeetingMenu;
