import { Box } from '@mui/material'
import React, {  useState } from 'react'
import TableBody from './TableBody/TableBody'
import AddColume from './AddColume/AddColume'
import { INITIAL_COL, INITIAL_ROW } from './ColumeData'
import { label, dueDate, Text, subtask, reporter, assignee, approval, attachments, notes, status, priority } from "./ColumeData"
import { Stack } from '@mui/system'
import classes from "./BottomBody.module.css"
const BottomBody = () => {


    const [tableRowData, setTableRowData] = useState(INITIAL_ROW);
    const [tableColData, setTableColData] = useState(INITIAL_COL);
    const [selectColor, setSelectColor] = useState("#fff");


    const addRow = (value) => {
        switch (value) {
            case "dueDate":
                setTableColData((tableColData) => [...tableColData, dueDate]);
                break;
            case "text":
                setTableColData((tableColData) => [...tableColData, Text]);
                break;
            case "subtask":
                setTableColData((tableColData) => [...tableColData, subtask]);
                break;
            case "reporter":
                setTableColData((tableColData) => [...tableColData, reporter]);
                break;
            case "assignee":
                setTableColData((tableColData) => [...tableColData, assignee]);
                break;
            case "approval":
                setTableColData((tableColData) => [...tableColData, approval]);
                break;
            case "label":
                setTableColData((tableColData) => [...tableColData, label]);
                break;
            case "attachment":
                setTableColData((tableColData) => [...tableColData, attachments]);
                break;
            case "notes":
                setTableColData((tableColData) => [...tableColData, notes]);
                break;
            case "priority":
                setTableColData((tableColData) => [...tableColData, priority]);
                break;
            case "status":
                setTableColData((tableColData) => [...tableColData, status]);
                break;
        }
    }

    const handleAddRow = () => {
        let lastElement = tableRowData[tableRowData.length - 1];

        const INITIAL_ADD_ROW = {
            id: lastElement.id + 1,
            name: "",
            note: "",
            status: "",
            priority: "",
            assignee: "",
            attachments: "",
            label: "",
            approval: "",
            checklist: "",
            reporter: "",
            text: "",
            dueDate: "",
            subtask: ""
        }
        setTableRowData((tableRowData) => [...tableRowData, INITIAL_ADD_ROW])
    }


    return (
        <Box className={classes.mainContainer} >
            <TableBody tableRowData={tableRowData} tableColData={tableColData} selectColor={selectColor} />
            <AddColume addRow={addRow} />
            <Box className={classes.RowBtn} onClick={() => handleAddRow()} >
                <Stack className={classes.createBtn} >
                    New Row
                </Stack>
            </Box>
        </Box>
    )
}

export default BottomBody
