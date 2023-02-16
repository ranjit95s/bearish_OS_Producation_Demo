import React from "react";
import Tooltip from "@mui/material/Tooltip";

const ReactTooltip = ({children, position = 'top', title, fontWeight = 300}) => {

    return (
        <>
            <Tooltip title={title} arrow placement={position} PopperProps={{
                sx: {
                    "& .MuiTooltip-tooltip": {
                        backgroundColor: '#E3E3E3',
                        color: 'black',
                        fontFamily: 'Source Serif Pro',
                        fontWeight,
                        fontSize: '15px',
                        padding: '3px 30px 3px 30px'
                    }, "& .MuiTooltip-arrow": {
                        "&::before": {
                            backgroundColor: "#E3E3E3",
                        }
                    }
                }
            }}>
                {children}
            </Tooltip>
        </>
    )
};
export default ReactTooltip
