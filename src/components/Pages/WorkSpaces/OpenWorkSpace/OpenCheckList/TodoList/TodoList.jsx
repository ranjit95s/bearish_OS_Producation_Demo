import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useRef, useState } from 'react'
import note from '../../../../../../Images/Bearish/note.svg';
import classes from "./TodoList.module.css"
import SubTodoList from './SubTodoList/SubTodoList'
import { statusArray, header, Date, Assignee, Priority, Text, Subtask, Reporter, Approval, Label, Attachment, Notes, Status } from './SubTodoList/subTool';
import AddStatus from './SubTodoList/StatusRow/AddStatus/AddStatus'
import flag from '../../../../../../Images/Bearish/flag.svg'
import checkall from '../../../../../../Images/Bearish/check_all.svg';
import justify from '../../../../../../Images/Bearish/justify.svg'
import alarm from '../../../../../../Images/Bearish/alarm.svg'
import more_vertical from '../../../../../../Images/Bearish/more_vertical-dubbel.svg'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TodoList = () => {

    const [statusData, setStatusData] = useState(statusArray);
    const [selectedStatus, setSelectedStatus] = useState();
    const [selectIndex, setSelectIndex] = useState();

    const addColumn = (index, value) => {
        switch (value) {
            case "dueDate":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Date] } : eachData) } : checkListCollection));
                header.push(Date)
                break;
            case "text":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Text] } : eachData) } : checkListCollection));
                break;
            case "subtask":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Subtask] } : eachData) } : checkListCollection));
                break;
            case "reporter":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Reporter] } : eachData) } : checkListCollection));
                break;
            case "assignee":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Assignee] } : eachData) } : checkListCollection));
                break;
            case "approval":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Approval] } : eachData) } : checkListCollection));
                break;
            case "label":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Label] } : eachData) } : checkListCollection));
                break;
            case "attachment":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Attachment] } : eachData) } : checkListCollection));
                break;
            case "notes":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Notes] } : eachData) } : checkListCollection));
                break;
            case "priority":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Priority] } : eachData) } : checkListCollection));
                break;
            case "status":
                setStatusData((prevState) => prevState.map((checkListCollection, i) => i === 0 ? { ...checkListCollection, data: checkListCollection.data.map((eachData, dataIndex) => dataIndex === selectIndex ? { ...eachData, coloumList: [...eachData.coloumList, Status] } : eachData) } : checkListCollection));
                break;
        }
    }

    const handelAddRowClick = () => {
        let lastElement = statusData[statusData.length - 1];
        const INITIAL_ADD_ROW = {
            id: lastElement.id + 1,
            ckeckall: checkall,
            description: `This is an example of a checklist item to be done ${lastElement.id + '1'}`,
            noteimg: note,
            menu: justify,
            moreimg: more_vertical,
            coloumList: [
                {
                    name: 'Due Date',
                    type: "date",
                    icon: alarm,
                },
                {
                    name: 'Assignee',
                    type: "assignee",
                    icon: 'MK',
                },
                {
                    name: 'Priority',
                    type: "priority",
                    icon: flag,
                },
            ]
        }
        setStatusData(statusData, statusData[0].data = [...statusData[0].data, INITIAL_ADD_ROW]);
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const handleOnDragEnd = (result) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(statusData[sInd].data, source.index, destination.index);
            statusData[sInd].data = items
        } else {
            const result = move(statusData[sInd].data, statusData[dInd].data, source, destination);
            statusData[dInd].data = result[dInd]
            statusData[sInd].data = result[sInd]
        }
    }

    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };


    const handleAddStatus = (i) => {
        const selectedData = selectedStatus[i]
        let lastElement = statusData[statusData.length - 1];
        const newStatus = {
            id: lastElement.id + '1',
            color: selectedData?.colorCode,
            status: selectedData.priority,
            data: []
        }
        setStatusData((statusData) => [...statusData, newStatus]);
    }


    return (
        <>
            <Box className={classes.mainContainer}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    {
                        statusData?.map((data, i) => (
                            <Droppable droppableId={`${i}`}>
                                {(provided, snapshot) => (
                                    <Stack
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        <SubTodoList
                                            statusData={data}
                                            addColumn={addColumn}
                                            handelAddRowClick={handelAddRowClick}
                                            setSelectIndex={setSelectIndex}
                                            index={i}
                                        />
                                    </Stack>
                                )}
                            </Droppable>
                        ))
                    }
                </DragDropContext>
            </Box>

            <Box className={classes.rowbutton} onClick={handelAddRowClick}>
                <Stack className={classes.createBtn} >
                    New Row
                </Stack>
            </Box>
            <Stack className={classes.buttonCenter}>
                <AddStatus setSelectedStatus={setSelectedStatus} handleAddStatus={handleAddStatus} />
            </Stack>
            <Stack className={classes.borderBottom} />
        </>
    )
}

export default TodoList;
