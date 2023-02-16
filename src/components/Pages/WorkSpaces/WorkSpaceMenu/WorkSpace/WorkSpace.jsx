import React, { useRef, useState } from 'react'
import { IconButton, Menu, Popover, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import DownArrow from "../../../../../Images/Bearish/chevron_down.svg"
import classes from "./workSpace.module.css"
import arcive from "../../../../../Images/Bearish/Light_archive.svg"
import parsone from "../../../../../Images/Bearish/parsonGreenicon.svg"
import CreateInput from '../../../../Common/CreateInput/CreateInput';
import { clsx } from "clsx"
import up_icon from "../../../../../Images/Bearish/chevron_up.svg"
import { HexColorPicker } from 'react-colorful';
import addItem from '../../.../../../../../Images/Bearish/add_circled.svg'
import Trash from "../../../../../Images/Bearish/trash.svg"
import editLogo from "../../../../../Images/Bearish/Light_edit.svg"
import { useNavigate } from 'react-router-dom';
import WorkSpaceTable from '../../../../Common/WorkSpaceTable.jsx/WorkSpaceTable';
import WorkSpaceDrawer from '../../../../Common/WorkSpaceMenu/WorkSpaceDrawer';
import checkbox_unchecked from "../../../../../Images/Bearish/checkbox_unchecked.svg"
import checkbox_checked from "../../../../../Images/Bearish/checked-checkbox.svg"


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
        icon: addItem,
    },
    {
        name: "Delete",
        icon: Trash,
    },
];

const rows = [
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
        color: "#E9EDF2"
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
        color: "#E9EDF2"
    }
]


const WorkSpace = () => {

    const [tableData, setTabledata] = useState(rows)
    const [openAccodian, setOpenAccodian] = useState(true);
    const [hexColor, setHexColor] = useState("#aabbcc")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const [colorPickerEl, setColorPickerEl] = React.useState(null);
    const isPickerOpen = Boolean(colorPickerEl);
    const [checkedbtn, setCheckedbtn] = useState(false);
    const handleAccodian = () => { setOpenAccodian(!openAccodian) };
    const rowIndex = useRef(0)
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOpenColorPicker = (event, index) => {
        rowIndex.current = index
        setColorPickerEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setColorPickerEl(null)
    };

    const onChangeColor = (e) => {
        setHexColor(e);
        tableData[rowIndex.current].color = hexColor;
    };

    const createWorkSpace = (e) => {
        e.preventDefault();
        const newList = {
            id: "4",
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
        setTabledata([...tableData, newList])
        e.target.workSpaceName.value = ""
    };


    const handleNavigate = ((e, id) => {
        navigate(`/workspace/${id}`);
    })

    return (
        <Box>
            <TableContainer component={Paper} className={classes.tbaleParent}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={clsx(classes.tableHeadCell, classes.tableCheck)}>
                                <img src={checkedbtn ? checkbox_checked : checkbox_unchecked} alt="" className={classes.Checkbox} onClick={() => setCheckedbtn(!checkedbtn)} />
                            </TableCell>
                            <TableCell className={classes.tableHeadCell}>Workspace Name</TableCell>
                            <TableCell align="right" className={clsx(classes.tableHeadShare, classes.tableHeadCell)}><img src={parsone} className={classes.headIcon} /> Share Now </TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}><img src={arcive} className={classes.headIcon} /> Totle Item</TableCell>
                            <TableCell align="right" className={classes.tableHeadCell}><IconButton onClick={handleAccodian}><img src={openAccodian ? DownArrow : up_icon} /></IconButton></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={clsx(openAccodian ? classes.accodianShow : classes.accodianHide)}>
                        {tableData?.map((row, index) => (
                            <React.Fragment key={index}>
                                <WorkSpaceTable row={row} index={index} handleNavigateRout={handleNavigate} handleColorPicker={handleOpenColorPicker} handleOpenSideMenu={handleOpenMenu} />
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* create input */}
            <CreateInput onSubmit={createWorkSpace} placeHolder={"Create New Workspace"} />

            {/* color picker */}
            <Menu
                aria-labelledby="demo-positioned-button"
                id='picker'
                open={isPickerOpen}
                PaperProps={{
                    style: {
                        width: "214px",
                        height: "264px"
                    }
                }}
                anchorEl={colorPickerEl} onClose={handleClose} className={classes.colorPickerMenu}>
                <Stack className={classes.colorCodePicker} >
                    <HexColorPicker color={hexColor} onChange={onChangeColor} />
                    <Stack padding={1} className={classes.colorCodeBox}>
                        <Stack align={`center`} fontSize={`11px`}>
                            {`HEX : ${hexColor || `#000`}`}
                        </Stack>
                    </Stack>
                </Stack>
            </Menu>

            {/* side menu */}
            <WorkSpaceDrawer drawOptions={drawOptions} anchorEl={anchorEl} handleClose={handleClose} />
        </Box >


    )
}

export default WorkSpace
