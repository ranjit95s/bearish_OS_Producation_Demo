import { TableBody } from '@mui/material'
import React, { useState } from 'react'
import WorkSpaceTable from '../../../../Common/WorkSpaceTable.jsx/WorkSpaceTable'
import classes from "./List.module.css"
import { clsx } from "clsx"
import parsone from "../../../../../Images/Bearish/parsonGreenicon.svg"
import editLogo from "../../../../../Images/Bearish/Light_edit.svg"
import Trash from "../../../../../Images/Bearish/trashRedIcon.svg"
import Analytics from "../../../../../Images/Bearish/trending_up.svg"
import Comments from "../../../../../Images/Bearish/full_smiley.svg"
import colorPicker from "../../../../../Images/Bearish/eye_dropper_blue.svg"
import WorkSpaceDrawer from '../../../../Common/WorkSpaceMenu/WorkSpaceDrawer'
import { useNavigate, useParams } from 'react-router-dom'
import CreateInput from "../../../../Common/CreateInput/CreateInput"
import { Stack } from '@mui/system'

const INITIAL_ARRAY = [
    {
        id: "1",
        workSpaceName: "Bearish OS Welcome Workspace",
        totleItem: "0000",
        user: [
            {
                id: "1",
                name: "MK"
            },
            {
                id: "2",
                name: "MK"
            },
            {
                id: "3",
                name: "MK"
            },
            {
                id: "4",
                name: "MK"
            },
        ],
        color: "#E9EDF2"

    },
    {
        id: "2",
        workSpaceName: "Bearish OS Welcome Workspace",
        totleItem: "0000",
        user: [
            {
                id: "1",
                name: "MK"
            },
            {
                id: "2",
                name: "MK"
            },
            {
                id: "3",
                name: "MK"
            },
            {
                id: "4",
                name: "MK"
            },
        ],
        color: "#FFA700"

    },
    {
        id: "3",
        workSpaceName: "Bearish OS Welcome Workspace",
        totleItem: "0000",
        user: [
            {
                id: "1",
                name: "MK"
            },
            {
                id: "2",
                name: "MK"
            },
            {
                id: "3",
                name: "MK"
            },
            {
                id: "4",
                name: "MK"
            },
        ],
        color: "#000AFF"

    },
]

const drawOptions = [
    {
        name: "Share Now",
        icon: parsone,
    },
    {
        name: "Rename",
        icon: editLogo,
    },
    {
        name: "Item Color",
        icon: colorPicker,
    },
    {
        name: "Analytics",
        icon: Analytics,
    },
    {
        name: "Comments",
        icon: Comments,
    },
    {
        name: "Delete",
        icon: Trash,
    },
];

const List = ({ openAccodian }) => {
    const [tableData, setTableData] = useState(INITIAL_ARRAY);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { id } = useParams()
    const navigate = useNavigate();
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNavigate = (event, Subid) => {
        event.preventDefault()
        navigate(`/workspace/${id}/list/${Subid}`);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const lastIndexId = tableData[tableData.length - 1]
        const newList = {
            id: lastIndexId.id + 1,
            workSpaceName: e.target.workSpaceName.value,
            totleItem: "0000",
            user: [
                {
                    id: "1",
                    name: "MK"
                },
                {
                    id: "2",
                    name: "MK"
                },
                {
                    id: "3",
                    name: "MK"
                },
                {
                    id: "4",
                    name: "MK"
                },
            ],
            color: "#E9EDF2"
        }
        setTableData([...tableData, newList])
        e.target.workSpaceName.value= ""
    }

    return (
        <>
            <TableBody className={clsx(openAccodian ? classes.accodianShow : classes.accodianHide)}>
                {
                    tableData?.map((row, index) => (
                        <React.Fragment key={index}>
                            <WorkSpaceTable row={row} index={index} handleOpenSideMenu={handleOpenMenu} handleNavigateRout={handleNavigate} />
                        </React.Fragment>
                    ))
                }
            </TableBody>
            <WorkSpaceDrawer drawOptions={drawOptions} anchorEl={anchorEl} handleClose={handleCloseMenu} />
            <Stack className={classes.inputContainer}>
                <CreateInput placeHolder={"Create New List"} onSubmit={onSubmit} />
            </Stack>
        </>
    )
}

export default List
