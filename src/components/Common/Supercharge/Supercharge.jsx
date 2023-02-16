import React from "react";
import Stack from "@mui/material/Stack";
import zapIcon from "../../../Images/Bearish/zap.svg";

const Supercharge = () => {

    return (
        <>
            <Stack sx={{position: 'absolute', bottom: '10px', right: '20px'}}>
                <Stack
                    sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '10px',
                        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16), inset 0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        border: 'solid 1px #fff'
                    }}>
                    <img alt={''} style={{width: '25px'}} src={zapIcon}/>
                </Stack>
            </Stack>
        </>
    )
};
export default Supercharge;
