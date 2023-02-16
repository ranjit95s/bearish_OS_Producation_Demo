import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import search from "../../../../../Images/Bearish/search.svg";

const DrawerInput = ({ placeholder }) => {
    const drawer = useSelector(state => state.layout.drawer);
    return (
        <Box sx={{ display: "flex", background: drawer.isOpen && "#f2f5f8", padding: "6px 1px", width: "100%" }}>
            <img src={search} alt="" />
            <input type="text" placeholder={placeholder} style={{ border: "none", fontSize: "18px", marginLeft: "10px", color: "black", background: "transparent", outline: "none" }} />
        </Box>
    )
};

export default DrawerInput;
