import React, {useState} from "react";
import {Stack} from "@mui/material";
import Rows from "./Rows";
import classes from "./AddCheckList.module.css"

const INITIAL_ARRAY = [{value: ''}];

const AddSubTask = () => {

    const [rows, setRows] = useState(INITIAL_ARRAY);

    const handleRowInput = (rowValue, index) => {
        setRows((rows) =>
            rows.map((eachRow, eachRowIndex) => {
                return eachRowIndex === index ?
                    {
                        ...eachRow,
                        value: rowValue
                    } :
                    eachRow
            })
        )
    };

    const handleCheckBox = (index) => {
        setRows((rows) =>
            rows.map((eachRow, eachRowIndex) => {
                return eachRowIndex === index ?
                    {
                        ...eachRow,
                        checked: !eachRow.checked
                    } :
                    eachRow
            })
        )
    };

    const handleAddRow = () => setRows(pre => ([...pre, ...INITIAL_ARRAY]));
    const handleDeleteRow = (index) => setRows(pre => pre.filter((_, i) => i !== index));

    return (
        <>
            <Stack gap={'20px'}>
                <Stack fontSize={'18px'}>
                    Subtask
                </Stack>
                <Stack className={classes.rowMain}>
                    {(rows || []).map((item, index) => (
                        <Rows
                            item={item}
                            index={index}
                            handleAddRow={handleAddRow}
                            handleCheckBox={handleCheckBox}
                            handleDeleteRow={handleDeleteRow}
                            handleRowInput={handleRowInput}/>
                    ))}
                </Stack>
            </Stack>
        </>
    )
};
export default AddSubTask;
