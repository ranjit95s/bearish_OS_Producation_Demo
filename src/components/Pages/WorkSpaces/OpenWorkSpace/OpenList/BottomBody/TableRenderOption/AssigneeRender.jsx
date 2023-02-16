import { Button, Menu } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react'
import StatusMenu from '../../../../../../Common/StatusMenu/StatusMenu';
import classes from "./AssigneeRender.module.css"
// import StatusMenu from '../../../../../../Common/StatusMenu/StatusMenu'
import pickerIcon from "../../../../../../../Images/Bearish/eye_dropper.svg"

const INITIAL_STATUS_ARRAY = [{
    priorityIcon: StatusMenu,
    priority: 'Done',
    pickerIcon: pickerIcon,
    colorCode: '#5EE2A0',
    isOpen: false
},
{
    priorityIcon: StatusMenu,
    priority: 'In Progress',
    pickerIcon: pickerIcon,
    colorCode: '#FFA700',
    isOpen: false
},
{
    priorityIcon: StatusMenu,
    priority: 'Delayed',
    pickerIcon: pickerIcon,
    colorCode: '#FF0000',
    isOpen: false
},
{
    priorityIcon: StatusMenu,
    priority: 'In Review',
    pickerIcon: pickerIcon,
    colorCode: '#775EE2',
    isOpen: false
},
{
    priorityIcon: StatusMenu,
    priority: 'To Do',
    pickerIcon: pickerIcon,
    colorCode: '#000AFF',
    isOpen: false
},
];

const AssigneeRender = () => {
    const [statusArray, setStatusArray] = useState(INITIAL_STATUS_ARRAY)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [statusName, setStatusName] = React.useState('To do');
    const [statusBgColor, setStatusBgColor] = React.useState('#000AFF');
    const isAnchorElOpen = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddStatus = (i) => {
        setStatusName(statusArray[i].priority);
        setStatusBgColor(statusArray[i].colorCode);
    }

    return (
        <Box className={classes.mainContainer}>
            <strong>
                <Button
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                    variant="contained"
                    className={classes.button}
                    style={{ backgroundColor: `${statusBgColor}50` }}
                >
                    {statusName}
                </Button>
            </strong>
            <Menu
                open={isAnchorElOpen}
                anchorEl={anchorEl}
                PaperProps={{
                    style: {
                        width: "133px",
                        height: "160px"
                    }
                }}
                onClose={handleClose}
            >
                <StatusMenu statusArray={statusArray} handleSelect={handleAddStatus} />
            </Menu>
        </Box>
    )
}

export default AssigneeRender
