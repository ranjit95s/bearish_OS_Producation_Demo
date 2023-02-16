import React, {useRef} from "react";
import classes from "../CallLogTable/CallLogTable.module.css";
import {Stack} from "@mui/material";
import {StatusIcon} from "../../../../../Common/StatusDropdown/StatusIcon";
import Popover from "@mui/material/Popover/Popover";
import StatusDropdown from "../../StatusDropdown/StatusDropdown";

const Status = ({handleStatusDropDown, open, handleSelectStatus, statusArray, handleSelectStatusColor, handleSelectStatusPicker, index, color}) => {
    const statusRef = useRef(null);

    return (
        <>
            <Stack ref={statusRef} className={classes.statusIcon}>

                <Stack onClick={() => handleStatusDropDown(index)}>
                    <StatusIcon
                        color={color || '#cccccc'}/>
                </Stack>

                <Popover
                    open={open}
                    anchorEl={statusRef.current}
                    onClose={() => handleStatusDropDown(index)}
                    anchorOrigin={{
                        vertical: 'bottom',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    PaperProps={{
                        style: {
                            boxShadow: 'unset',
                            width: '133px',
                            height: 'auto',
                            border: '1px solid #E9EDF2',
                            borderRadius: '5px'
                        },
                    }}
                >
                    <StatusDropdown
                        handleSelect={(status) => handleSelectStatus(status, index)}
                        statusArray={statusArray}
                        handleSelectColor={(color, dropDownIndex) => handleSelectStatusColor(color, dropDownIndex, index)}
                        handleSelectPicker={handleSelectStatusPicker}
                    />
                </Popover>

            </Stack>
        </>
    )
};
export default Status;