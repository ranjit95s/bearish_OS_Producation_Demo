import React, {useRef, useState} from "react";
import {Stack, TextField} from "@mui/material";
import moment from "moment";
import {ThemeProvider} from "@mui/material/styles";
import {LocalizationProvider, DatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import Popover from "@mui/material/Popover";
import PriorityDropdown from "../../Prioritydropdown/PriorityDropdown";
import HierarchyDropdown from "../../HierarchyDropdown/HierarchyDropdown";
import SearchDropdown from "../../SearchDropdown/SearchDropdown";
import AddCheckLis from "../AddCheckListAndSubTask/AddCheckLis";
import AddSubTask from "../AddCheckListAndSubTask/AddSubTask";
import Attachments from "../Attachments/Attachments";
import AttachmentsUser from "../AttachmentsUser/AttachmentsUser";
import upperDoubleArrowIcon from "../../../../Images/Bearish/upperDoubleArrow.svg";
import downIcon from "../../../../Images/Bearish/chevron_down.svg";
import upIcon from "../../../../Images/Bearish/chevron_up.svg";
import checkedCheckboxIcon from "../../../../Images/Bearish/checked-checkbox.svg";
import add_circledIcon from "../../../../Images/Bearish/add_circled.svg";
import pickerIcon from "../../../../Images/Bearish/eye_dropper.svg";
import {PriorityIcon} from "../../Prioritydropdown/PriorityIcon";
import StatusDropdown from "../../StatusDropdown/StatusDropdown";
import {StatusIcon} from "../../StatusDropdown/StatusIcon";
import ColorPicker from "../../ColorPicker/ColorPicker";
import classes from "./ToDayAddTask.module.css";

const INITIAL_PRIORITY_ARRAY = [{
    priorityIcon: upperDoubleArrowIcon,
    priority: 'High',
    pickerIcon: pickerIcon,
    colorCode: '#ff2121',
    isOpen: false
}, {
    priorityIcon: upperDoubleArrowIcon,
    priority: 'Medium',
    pickerIcon: pickerIcon,
    colorCode: '#ffa906',
    isOpen: false
}, {
    priorityIcon: upperDoubleArrowIcon,
    priority: 'Low',
    pickerIcon: pickerIcon,
    colorCode: '#040eff',
    isOpen: false
}, {
    priorityIcon: upperDoubleArrowIcon,
    priority: 'Custom',
    pickerIcon: pickerIcon,
    colorCode: '#62e3a2',
    isOpen: false
}];

const INITIAL_STATUS_ARRAY = [{
    status: 'Done',
    pickerIcon: pickerIcon,
    colorCode: '#5EE2A0',
    isOpen: false
}, {
    status: 'In Progress',
    pickerIcon: pickerIcon,
    colorCode: '#FFA700',
    isOpen: false
}, {
    status: 'Delayed',
    pickerIcon: pickerIcon,
    colorCode: '#FF0000',
    isOpen: false
}, {
    status: 'In Review',
    pickerIcon: pickerIcon,
    colorCode: '#775EE2',
    isOpen: false
}, {
    status: 'To Do',
    pickerIcon: pickerIcon,
    colorCode: '#000AFF',
    isOpen: false
}];

const ToDayAddTask = (props) => {
    const {handleCloseAddTaskModal} = props;

    const nameYourTaskRef = useRef(null);

    const [state, setState] = useState({
        datePicker: false,
        assignedDatePicker: false,
        selectDate: new Date(),
        assignedDate: new Date(),
        checkList: false,
        subTask: false,
        colorPicker: false
    });


    const [task, setTask] = useState();
    const [search, setSearch] = useState();

    const [selections, setSelections] = useState();
    const [priorityArray, setPriorityArray] = useState(INITIAL_PRIORITY_ARRAY);
    const [statusArray, setStatusArray] = useState(INITIAL_STATUS_ARRAY);

    const handleDateChange = async (date) => {
        setState(pre => ({...pre, selectDate: new Date(date).toLocaleString(), datePicker: false}))
    };
    const handleAssignedDateChange = async (date) => {
        setState(pre => ({...pre, assignedDate: new Date(date).toLocaleString(), assignedDatePicker: false}));
    };

    const handleSelectPriority = (priority) => {
        setSelections(pre => ({...pre, priority}))
    };

    const handleSelectStatus = (status) => {
        setSelections(pre => ({...pre, status}))
    };

    const handleSelectWorkspace = (workspace) => {
        setSelections(pre => ({...pre, workspace}))
    };

    const handleSelectAssignedTo = (assignedTo) => {
        setSelections(pre => ({...pre, assignedTo}))
    };

    const handleSelectReportTo = (reportTo) => {
        setSelections(pre => ({...pre, reportTo}))
    };

    const handleSelectAttachment = (attachment) => {
        setSelections(pre => ({...pre, attachment}))
    };

    const handleAssignedSearch = (assigned) => setSearch(pre => ({...pre, assigned}));

    const handleReportSearch = (report) => setSearch(pre => ({...pre, report}));

    const handleSelectPicker = (index) => {
        setPriorityArray(priority =>
            priority.map((eachPriority, eachPriorityIndex) => {
                return eachPriorityIndex === index ?
                    {
                        ...eachPriority,
                        isOpen: !eachPriority.isOpen
                    } :
                    {
                        ...eachPriority,
                        isOpen: false
                    }
            }))
    };

    const handleSelectStatusPicker = (index) => {
        setStatusArray(status =>
            status.map((eachStatus, eachStatusIndex) => {
                return eachStatusIndex === index ?
                    {
                        ...eachStatus,
                        isOpen: !eachStatus.isOpen
                    } :
                    {
                        ...eachStatus,
                        isOpen: false
                    }
            }))
    };

    const handleSelectColor = async (colorCode, index) => {
        await setPriorityArray(priority =>
            priority.map((eachPriority, eachPriorityIndex) => {
                return eachPriorityIndex === index ?
                    {
                        ...eachPriority,
                        colorCode
                    } : eachPriority
            }));
        setSelections(pre => ({...pre, priority: priorityArray[index]}))
    };

    const handleSelectStatusColor = async (colorCode, index) => {
        await setStatusArray(priority =>
            priority.map((eachStatus, eachStatusIndex) => {
                return eachStatusIndex === index ?
                    {
                        ...eachStatus,
                        colorCode
                    } : eachStatus
            }));
        setSelections(pre => ({...pre, status: statusArray[index]}))
    };

    const handleDueOnDatePicker = () => {
        setState(pre => ({...pre, datePicker: !pre.datePicker}));
    };

    const handleAssignedDatePicker = () => {
        setState(pre => ({...pre, assignedDatePicker: !pre.assignedDatePicker}));
    };

    return (
        <>
            <Stack className={classes.toDayAddTask}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack direction={'row'} gap={'5px'}>
                        <Stack ref={nameYourTaskRef}>
                            <Stack
                                className={classes.squareBox}
                                onClick={() => setState(pre => ({ ...pre, colorPicker: !pre.colorPicker }))}
                                sx={{ background: selections?.color || '#fff' }} />

                            <Popover
                                open={state.colorPicker}
                                anchorEl={nameYourTaskRef.current}
                                onClose={() => setState(pre => ({...pre, colorPicker: false}))}
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
                                    handleSelectColor={(color) => {
                                        setSelections(pre => ({ ...pre, color }));
                                        // setState(pre => ({...pre, colorPicker: !pre.colorPicker}))
                                    }}
                                    color={selections?.color}/>
                            </Popover>
                        </Stack>
                        <input
                            placeholder={'Name your Task'}
                            className={classes.nameYourTask}
                            type={'text'}
                            onChange={({ target }) => setTask(pre => ({ ...pre, taskName: target.value }))}
                        />
                        <Stack>

                        </Stack>
                    </Stack>
                    <Stack direction={'row'} gap={'10px'}>
                        <Stack sx={{opacity: 0.2}}>
                            <PriorityIcon color={(selections?.priority?.colorCode)}/>
                        </Stack>
                        <Stack width={'133px'} fontFamily={'Source Serif Pro'}>
                            <PriorityDropdown
                                handleSelect={handleSelectPriority}
                                placeholder={(selections?.priority?.priority || 'Priority')}
                                handleSelectPicker={handleSelectPicker}
                                handleSelectColor={handleSelectColor}
                                priorityArray={priorityArray} />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={classes.dueMain}>
                    <Stack direction={'row'} gap={'9px'} justifyContent={'space-between'}>
                        <Stack justifyContent={'center'} fontSize={'18px'}>
                            In
                        </Stack>
                        <Stack width={'225px'}>
                            <HierarchyDropdown placeholder={selections?.workspace?.name || ''}
                                handleSelect={handleSelectWorkspace} />
                        </Stack>
                    </Stack>
                    <Stack className={classes.dueOnMain}>
                        <Stack justifyContent={'center'} fontSize={'18px'}>
                            Due on
                        </Stack>
                        <Stack>
                            <Stack fontFamily={'Source Serif Pro'}>
                                <Stack className={classes.selectTab}
                                       onClick={handleDueOnDatePicker}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            open={state.datePicker}
                                            value={state.selectDate}
                                            onClose={() => setState(pre => ({...pre, datePicker: false}))}
                                            PaperProps={{className: classes.muiDatePicker}}
                                            onChange={(newValue) => handleDateChange(newValue)}
                                            renderInput={({inputRef}) => (
                                                <Stack ref={inputRef} marginLeft={'5px'} fontSize={'18px'}>
                                                    {moment(state.selectDate).format('DD/MM/YYYY')}
                                                </Stack>
                                            )}
                                        />
                                    </LocalizationProvider>
                                    <img style={{opacity: 0.5}} src={state.datePicker ? downIcon : upIcon} alt={''}/>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={classes.assignedMain}>
                    <Stack direction={'row'} gap={'10px'} alignItems={'center'}>
                        <Stack className={classes.nowrap} fontSize={'18px'}>
                            Assigned To
                        </Stack>
                        <Stack width={'200px'}>
                            <SearchDropdown
                                placeholder={selections?.assignedTo?.email || ''}
                                handleSearch={handleAssignedSearch}
                                searchValue={search?.assigned || ''}
                                handleSelect={handleSelectAssignedTo} />
                        </Stack>
                    </Stack>
                    <Stack className={classes.onMain} direction={'row'} justifyContent={'space-between'}>
                        <Stack justifyContent={'center'} fontSize={'18px'}>
                            On
                        </Stack>
                        <Stack fontFamily={'Source Serif Pro'}>
                            <Stack className={classes.selectTab}
                                   onClick={handleAssignedDatePicker}>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        open={state.assignedDatePicker}
                                        value={state.assignedDate}
                                        onClose={() => setState(pre => ({...pre, assignedDatePicker: false}))}
                                        PaperProps={{className: classes.muiDatePicker}}
                                        onChange={(newValue) => handleAssignedDateChange(newValue)}
                                        renderInput={({inputRef}) => (
                                            <Stack ref={inputRef} marginLeft={'5px'} fontSize={'18px'}>
                                                {moment(state.assignedDate).format('DD/MM/YYYY')}
                                            </Stack>
                                        )}
                                    />
                                </LocalizationProvider>
                                <img style={{opacity: 0.5}} src={state.assignedDatePicker ? downIcon : upIcon}
                                     alt={''}/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={classes.reportMain}>
                    <Stack direction={'row'} gap={'28px'} alignItems={'center'}>
                        <Stack className={classes.nowrap} fontSize={'18px'}>
                            Report To
                        </Stack>
                        <Stack width={'200px'}>
                            <SearchDropdown
                                placeholder={selections?.reportTo?.email}
                                handleSearch={handleReportSearch}
                                searchValue={search?.report || ''}
                                handleSelect={handleSelectReportTo} />
                        </Stack>
                    </Stack>
                    <Stack className={classes.statusMain}>
                        {/*<img style={{opacity: 0.3}} src={check_allIcon} alt={''}/>*/}
                        <Stack sx={{opacity: 0.2}}>
                            <StatusIcon color={selections?.status?.colorCode}/>
                        </Stack>
                        <StatusDropdown
                            handleSelect={handleSelectStatus}
                            placeholder={(selections?.status?.status || 'Status')}
                            handleSelectPicker={handleSelectStatusPicker}
                            handleSelectColor={handleSelectStatusColor}
                            statusArray={statusArray} />
                    </Stack>
                </Stack>
                <Stack>
                    <textarea
                        className={classes.detailsOfTheTask}
                        placeholder={'Details of the task'}
                        onChange={({ target }) => setTask(pre => ({ ...pre, taskDetails: target.value }))} />
                </Stack>
                <Stack className={classes.addOptions}>
                    {!state.checkList && <Stack
                        className={classes.checkListLabel}
                        onClick={() => setState(pre => ({...pre, checkList: true}))}>
                        <img width={'12px'} src={checkedCheckboxIcon} alt={''}/>
                        <Stack fontSize={'11px'}>
                            Add a Checklist
                        </Stack>
                    </Stack>}
                    {!state.subTask && <Stack
                        className={classes.checkListLabel}
                        onClick={() => setState(pre => ({...pre, subTask: true}))}>
                        <img width={'15px'} src={add_circledIcon} alt={''}/>
                        <Stack fontSize={'11px'}>
                            Add a Subtask
                        </Stack>
                    </Stack>}
                </Stack>
                {(state.subTask || state.checkList) && <Stack>
                    {state.checkList && <Stack marginTop={'20px'}> <AddCheckLis/> </Stack>}
                    {state.subTask && <Stack marginTop={'20px'}> <AddSubTask/> </Stack>}
                </Stack>}
                <Stack marginTop={(state.subTask || state.checkList) ? '54px' : '20px'}>
                    <Attachments
                        placeholder={selections?.attachment?.name || 'Add Now'}
                        handleSelect={handleSelectAttachment} />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}
                    marginTop={(state.subTask || state.checkList) ? '20px' : '94px'}>
                    <AttachmentsUser />
                    <Stack justifyContent={'flex-end'}>
                        <Stack className={classes.createBtn} onClick={handleCloseAddTaskModal}>
                            Create
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default ToDayAddTask;
