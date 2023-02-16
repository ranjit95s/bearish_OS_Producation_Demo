import { Popover } from '@mui/material';
import React from 'react'
import WorkSpaceOption from "./SubMenu/WorkSpaceOption"

const WorkSpaceDrawer = ({ drawOptions, anchorEl, handleClose }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: -120,
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            menuStyle={{ boxShadow: 'none' }}
            PaperProps={{
                style: { width: '150px', height: "auto", paddingBottom: "15px", border: "2px solid white" },
            }}
        >
            <WorkSpaceOption options={drawOptions} />
        </Popover>
    )
}

export default WorkSpaceDrawer
