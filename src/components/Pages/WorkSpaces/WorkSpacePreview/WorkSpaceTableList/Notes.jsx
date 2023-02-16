import { Stack, TableBody } from '@mui/material';
import React, { useState } from 'react'
import WorkSpaceTable from '../../../../Common/WorkSpaceTable.jsx/WorkSpaceTable';
import classes from "./Notes.module.css"
import { clsx } from "clsx"
import parsone from "../../../../../Images/Bearish/parsonGreenicon.svg"
import editLogo from "../../../../../Images/Bearish/Light_edit.svg"
import Trash from "../../../../../Images/Bearish/trashRedIcon.svg"
import folder from "../../../../../Images/Bearish/folder.svg"
import addCircle from "../../../../../Images/Bearish/add_circled.svg"
import WorkSpaceDrawer from '../../../../Common/WorkSpaceMenu/WorkSpaceDrawer'
import { useNavigate, useParams } from 'react-router-dom';
import CreateInput from '../../../../Common/CreateInput/CreateInput';
import folder_add from "../../../../../Images/Bearish/folder_add.svg"

const INITIAL_ARRAY = [
    {
        id: "1",
        workSpaceName: "Bearish OS Welcome Workspace",
        totleItem: "0000",
        type: "folder",
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
        type: "document",
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
    {
        id: "3",
        workSpaceName: "Bearish OS Welcome Workspace",
        type: "document",
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
        color: "#00767B"

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
        name: "Add an Item",
        icon: addCircle,
    },
    {
        name: "Move to Folder",
        icon: folder,
    },
    {
        name: "Delete",
        icon: Trash,
    },
];

const INPUTiCONS = [
    {
        icon: folder_add,
        value: "folder",
        placeHolder: "Create New Folder for Notes",
        type: 'folder',
    }
]

const Notes = ({ openAccodian }) => {
    const [tableData, setTableData] = useState(INITIAL_ARRAY);
    const [itemType, setItemType] = useState('document');
    const { id } = useParams()
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNavigate = (event, Subid) => {
        event.preventDefault();
        navigate(`/workspace/${id}/notes/${Subid}`);
    };

    const onSubmit = (e) => {
        e.preventDefault()
        const lastIndexId = tableData[tableData.length - 1]
        const newList = {
            id: lastIndexId.id + 1,
            workSpaceName: e.target.workSpaceName.value,
            type: itemType,
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
        setItemType('document')
        e.target.workSpaceName.value = ""
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
                <CreateInput placeHolder={"Create New Note"} INPUTiCONS={INPUTiCONS} onSubmit={onSubmit} setItemType={setItemType}/>
            </Stack>
        </>
    )
}

export default Notes;