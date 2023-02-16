import { Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import classes from "./CreateInput.module.css"
import addCircle from "../../../Images/Bearish/add_circled.svg"

const CreateInput = ({ onSubmit, placeHolder, INPUTiCONS, setItemType }) => {

    const [showBtn, setShowBtn] = useState(true);
    const [selectType, setSelectType] = useState(placeHolder)
    const handleCreate = () => {
        setShowBtn(false)
    }

    const handelOnClick = (value, type) => {
        setSelectType(value)
        setItemType(type);
    }

    return (
        <Box className={classes.inputParent}>
            <form onSubmit={(e) => onSubmit(e)}>
                <Box className={classes.mainBox} onClick={handleCreate}>
                    <IconButton onClick={() => setSelectType(placeHolder)} >
                        <img src={addCircle} alt="add" htmlFor="formGroupExampleInput" />
                    </IconButton>
                    {
                        INPUTiCONS?.map((ele, i) => (
                            <IconButton className={classes.iconbgcolor} onClick={() => handelOnClick(ele.placeHolder, ele.type)} key={i}>
                                <img src={ele.icon} alt="" />
                            </IconButton>
                        ))
                    }

                    <input type="text" name="workSpaceName" className={classes.input} placeholder={selectType} readOnly={showBtn} id="formGroupExampleInput" />
                    <button type='submit' className={classes.createBtn} hidden={showBtn}>Create Now</button>
                </Box>
            </form>
        </Box>
    )
}

export default CreateInput
