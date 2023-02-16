import React, { useState } from 'react'
import classes from "./WorkSpaceTable.module.css"
import { Avatar, AvatarGroup, Checkbox, IconButton, Stack, TableCell, TableRow } from '@mui/material';
import { clsx } from "clsx"
import combineShape from "../../../Images/Bearish/Combined Shape.svg"
import { useLocation } from 'react-router-dom';
import checkbox_unchecked from "../../../Images/Bearish/checkbox_unchecked.svg"
import checkbox_checked from "../../../Images/Bearish/checked-checkbox.svg"
import colorPicker from "../../../Images/Bearish/eye_dropper.svg"
import folder from "../../../Images/Bearish/folder.svg"
import database from "../../../Images/Bearish/database.svg"

const WorkSpaceTable = ({
    row,
    index,
    handleOpenSideMenu,
    handleColorPicker,
    handleNavigateRout
}) => {
    const location = useLocation()
    const [checkedbtn, setCheckedbtn] = useState(false);

    const folder_wiki_doc = (row) => {
        if (row?.type === "folder") {
            return <img src={folder} alt="folder" className={classes.Checkbox}  />
        } else if (row?.type === "document") {
            return <img src={checkedbtn ? checkbox_checked : checkbox_unchecked} alt="document" className={classes.Checkbox} onClick={() => setCheckedbtn(!checkedbtn)} />
        } else if (row?.type === "wiki") {
            return <img src={database} alt="database" className={classes.Checkbox} />
        } else {
            return <img src={checkedbtn ? checkbox_checked : checkbox_unchecked} alt="document" className={classes.Checkbox} onClick={() => setCheckedbtn(!checkedbtn)} />
        }
    }

    return (
        <TableRow
            className={classes.tableRow}
            sx={{ backgroundColor: `${row?.color}60 !important` }}
        >
            <TableCell className={clsx(classes.tableBodyCell, classes.tableCheck)}>
                {folder_wiki_doc(row)}
            </TableCell>
            <TableCell component="th" scope="row" className={classes.tableBodyCell} onClick={(e) => handleNavigateRout(e, row?.id, row?.type)}>
                {row?.workSpaceName}
            </TableCell>
            <TableCell align="center" className={classes.tableBodyCell} onClick={(e) => handleNavigateRout(e, row?.id, row?.type)}>
                <AvatarGroup max={4} spacing={20}>
                    {
                        row?.user?.map((user, index) => (
                            <Avatar key={user.id} className={classes.tableAvtar} sx={{ zIndex: index }}>{user.name}</Avatar>
                        ))
                    }
                </AvatarGroup>
            </TableCell>
            <TableCell align="center" className={classes.tableBodyCell} onClick={(e) => handleNavigateRout(e, row?.id, row?.type)}>{row?.totleItem}</TableCell>
            <TableCell align="right" className={classes.tableBodyCell}>
                {location.pathname === "/workspace" && <IconButton onClick={(e) => handleColorPicker(e, index)}>
                    <Stack sx={{ backgroundColor: `${row?.color} !important` }} className={classes.colorPicker}>
                        <img src={colorPicker} alt="colorPicker" id="demo-positioned-button" />
                    </Stack>
                </IconButton>}
                <IconButton onClick={handleOpenSideMenu} className={classes.combineMenu}>
                    <img src={combineShape} />
                </IconButton></TableCell>
        </TableRow>
    )
}

export default WorkSpaceTable
