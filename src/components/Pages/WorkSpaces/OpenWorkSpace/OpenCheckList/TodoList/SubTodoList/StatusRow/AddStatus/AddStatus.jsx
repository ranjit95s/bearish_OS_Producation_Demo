import { Button, Menu, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import classes from './AddStatus.module.css'
import checkall from '../../../../../../../../../Images/Bearish/check_all.svg'
import pickerIcon from "../../../../../../../../../Images/Bearish/eye_dropper.svg"
import StatusMenu from '../../../../../../../../Common/StatusMenu/StatusMenu'

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


const AddStatus = ({ setSelectedStatus, handleAddStatus }) => {
    const [statusArray, setStatusArray] = useState(INITIAL_STATUS_ARRAY)
    const [openStatus, setOpenStatus] = useState(false)
    const isStatusOpen = Boolean(openStatus);
    const handleClose = () => {
        setOpenStatus(null);
    };
    setSelectedStatus(statusArray);


    return (
        <Stack className={classes.boxposition}>
            <Stack className={classes.boxflex}>
                <Typography className={classes.fontsize}>Add New Status</Typography>
                <Button className={classes.imgWidth} onClick={(event) => setOpenStatus(event.currentTarget)}>
                    <img src={checkall} alt="checkall" />
                </Button>
            </Stack>
            <Menu
                open={isStatusOpen}
                anchorEl={openStatus}
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
        </Stack>
    )
}

export default AddStatus
