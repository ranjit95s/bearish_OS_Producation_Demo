import note from "../../../../../../Images/Bearish/note.svg"
import classes from "./BottomBody.module.css"
import check_all from "../../../../../../Images/Bearish/check_all.svg"
import Priority from "../../../../../../Images/Bearish/flag.svg"
import user_privacy from "../../../../../../Images/Bearish/user_privacy.svg"

import AssigneeRender from "./TableRenderOption/AssigneeRender"
import PriorityRender from "./TableRenderOption/PriorityRender"
import Chack_ColorPIckerRender from './TableRenderOption/Chack_ColorPIckerRender'
import { Stack } from '@mui/system'
import ListModal from '../../../../../Common/ListModal/ListModal'
import AssigneeDropdown from '../../../../../Common/AssigneeDropdown/AssigneeDropdown'
import { Box } from "@mui/material"
import LableRender from "./TableRenderOption/LableRender"
import lable from "../../../../../../Images/Bearish/lable.svg"
import attachment from "../../../../../../Images/Bearish/attachment.svg"
import ApprovalsRender from "./TableRenderOption/ApprovalsRender"
import unChackBox from "../../../../../../Images/Bearish/checkbox_unchecked.svg"
import CheckListRender from "./TableRenderOption/CheckListRender"
import profile_circled from "../../../../../../Images/Bearish/profile_circled.svg"
import justify from "../../../../../../Images/Bearish/justify.svg"
import alarm from "../../../../../../Images/Bearish/alarm.svg"
import multiselect from "../../../../../../Images/Bearish/multiselect.svg"

export const INITIAL_ROW = [
    {
        id: 1,
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
    },
    {
        id: 2,
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
    },
    {
        id: 3,
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
    },
    {
        id: 4,
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
    },
    {
        id: 5,
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
    },
];

export const  check = {
    field: 'check',
    headerName: '',
    width: 40,
    editable: false,
    headerClassName: 'super-app-theme--header',
    renderCell: Chack_ColorPIckerRender
}

export const subtask = {
    field: 'subtask',
    headerName: 'Subtask',
    headerClassName: 'super-app-theme--header',
    type: 'dateTime',
    width: 160,
    flex: 1,
    editable: false,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={unChackBox} alt="lable" className={classes.headerIcon} />
                    {'Subtask'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
    renderCell: CheckListRender,
}

export const dueDate = {
    field: 'dueDate',
    headerName: 'Due Date',
    headerClassName: 'super-app-theme--header',
    type: 'dateTime',
    width: 160,
    flex: 1,
    editable: true,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={alarm} alt="lable" className={classes.headerIcon} />
                    {'Due Date'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
}

export const Text = {
    field: 'text',
    headerName: 'Text',
    headerClassName: 'super-app-theme--header',
    width: 160,
    flex: 1,
    editable: true,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={justify} alt="lable" className={classes.headerIcon} />
                    {'Text'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
}

export const reporter = {
    field: 'reporter',
    headerName: 'Reporter',
    headerClassName: 'super-app-theme--header',
    width: 160,
    flex: 1,
    editable: false,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={profile_circled} alt="lable" className={classes.headerIcon} />
                    {'Reporter'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
    renderCell: AssigneeDropdown,
}

export const checklist = {
    field: 'checklist',
    headerName: 'Checklist',
    headerClassName: 'super-app-theme--header',
    width: 160,
    flex: 1,
    editable: false,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={unChackBox} alt="lable" className={classes.headerIcon} />
                    {'Checklist'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
    renderCell: CheckListRender,
}

export const approval = {
    field: 'approval',
    headerName: 'Approval',
    headerClassName: 'super-app-theme--header',
    width: 160,
    flex: 1,
    editable: false,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={multiselect} alt="lable" className={classes.headerIcon} />
                    {'Approval'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
    renderCell: ApprovalsRender,
}

export const label = {
    field: 'label',
    headerName: 'Label',
    headerClassName: 'super-app-theme--header',
    width: 160,
    flex: 1,
    editable: false,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={lable} alt="lable" className={classes.headerIcon} />
                    {'Label'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
    renderCell: LableRender,
}

export const attachments = {
    field: 'attachments',
    headerName: 'Attachments',
    headerClassName: 'super-app-theme--header',
    width: 160,
    flex: 1,
    editable: true,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={attachment} alt="note" className={classes.headerIcon} />
                    {'Attachments'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
}

export const assignee = {
    field: 'assignee',
    headerName: 'Assignee',
    headerClassName: 'super-app-theme--header',
    width: 160,
    flex: 1,
    editable: false,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={user_privacy} alt="note" className={classes.headerIcon} />
                    {'Assignee'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
    renderCell: AssigneeDropdown,

}

export const priority = {
    field: 'priority',
    headerName: 'Priority',
    headerClassName: 'super-app-theme--header',
    width: 160,
    flex: 1,
    editable: false,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={Priority} alt="note" className={classes.headerIcon} />
                    {'Priority'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
    renderCell: PriorityRender
}

export const status = {
    field: 'status',
    headerName: 'Status',
    width: 160,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    editable: false,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={check_all} alt="note" className={classes.headerIcon} />
                    {'Status'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),
    renderCell: AssigneeRender
}

export const notes = {
    field: 'notes',
    headerName: `Notes`,
    width: 160,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    editable: true,
    renderHeader: () => (
        <>
            <Stack className={classes.header}>
                <Box className={classes.headerMain}>
                    <img src={note} alt="note" className={classes.headerIcon} />
                    {'Notes'}
                </Box>
                <Box className={classes.headerupArrow}>
                    <ListModal />
                </Box>
            </Stack>
        </>
    ),

}

export const name = {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    width: 160,
    headerClassName: 'super-app-theme--header',
    editable: true,
    renderHeader: () => (
        <Stack className={classes.header}>
            <Stack className={classes.headerStack}>A</Stack>
            <Box className={classes.headerMain}>
                {'Name'}
            </Box>
            <Box className={classes.headerupArrow}>
                <ListModal />
            </Box>
        </Stack>
    )
}

export const INITIAL_COL = [
    check,
    name,
    notes,
    status,
    priority,
    assignee
]