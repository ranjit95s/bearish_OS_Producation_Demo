import React, {useState} from "react";
import classes from "./ToDo.module.css";
import {Stack, Modal} from "@mui/material";
import downIcon from "../../../Images/Bearish/chevron_down.svg";
import upIcon from "../../../Images/Bearish/chevron_up.svg";
import addIcon from "../../../Images/Bearish/add_circled.svg";
import ToDoToday from "./ToDoToday/ToDoToday";
import ToDoPending from "./ToDoPending/ToDoPending";
import ToDayAddTask from "./ToDayAddTask/ToDayAddTask";

const ToDo = () => {

    const [select, setSelect] = useState({today: false, next: false, overdue: false, pending: false});
    const [addTask, setAddTask] = useState({today: false, next: false, overdue: false});
    const [state, setState] = useState([{}, {}]);

    const handleSelectToday = () => setSelect(pre => ({...pre, today: !pre.today}));
    const handleSelectPending = () => setSelect(pre => ({...pre, pending: !pre.pending}));
    const handleToDayAddTask = () => {
        setAddTask(pre => ({...pre, today: true}))
    };

    return (
        <>
            <Stack className={classes.toDoMain}>
                <Stack direction={'row'} gap={'35px'}>
                    <Stack className={classes.today}>
                        Today
                    </Stack>
                    <Stack>
                        <img alt={''} style={{width: '25px', cursor: 'pointer'}} src={select.today ? upIcon : downIcon}
                             onClick={handleSelectToday}/>
                    </Stack>
                    <Stack direction={'row'} gap={'5px'} alignItems={'center'} sx={{cursor: 'pointer'}}
                           onClick={handleToDayAddTask}>
                        <img style={{width: '11px', cursor: 'pointer'}} src={addIcon} alt={''}/>
                        <Stack fontSize={'11px'}>
                            Add Task
                        </Stack>
                    </Stack>
                </Stack>
                {select.today && <ToDoToday/>}
                <Stack direction={'row'} gap={'35px'}>
                    <Stack className={classes.toDoTitle}>
                        <Stack className={classes.today}>
                            Next
                        </Stack>
                        <img alt={''} style={{width: '25px', cursor: 'pointer'}} src={upIcon}/>
                    </Stack>

                    <Stack className={classes.addTask}>
                        <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={addIcon}/>
                        <Stack fontSize={'11px'}>
                            Add Task
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={'row'} gap={'35px'}>
                    <Stack className={classes.toDoTitle}>
                        <Stack className={classes.today}>
                            Overdue
                        </Stack>
                        <img alt={''} style={{width: '25px', cursor: 'pointer'}} src={upIcon}/>
                    </Stack>

                    <Stack className={classes.addTask}>
                        <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={addIcon}/>
                        <Stack fontSize={'11px'}>
                            Add Task
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={'row'} gap={'35px'}>
                    <Stack className={classes.toDoTitle}>
                        <Stack className={classes.today}>
                            Pending
                        </Stack>
                        <img alt={''} style={{width: '25px', cursor: 'pointer'}}
                             src={select.pending ? upIcon : downIcon}
                             onClick={handleSelectPending}/>
                    </Stack>
                </Stack>
                {select.pending && <> {(state || []).map((item, index) => (
                    <ToDoPending key={index}/>
                ))}
                </>}
            </Stack>

            {addTask.today &&
                <Modal
                    className={classes.addTaskMuiModal}
                    open={addTask.today}
                    onClose={() => setAddTask(pre => ({...pre, today: false}))}>
                    <ToDayAddTask handleCloseAddTaskModal={() => setAddTask(pre => ({...pre, today: false}))}/>
                </Modal>}
        </>
    )
};
export default ToDo;
