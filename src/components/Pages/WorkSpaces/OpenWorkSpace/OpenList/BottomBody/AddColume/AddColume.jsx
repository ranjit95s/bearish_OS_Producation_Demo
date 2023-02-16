import { IconButton, Menu } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import add_circled from "../../../../../../../Images/Bearish/add_circled.svg"
import AddToList from '../../../../../../Common/AddToListModle/AddToList'
import clasess from "./AddColume.module.css"

const AddColume = ({ addRow }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const isMenuOpen = Boolean(openMenu);
    const handleClose = () => {
        setOpenMenu(null);
    };
    return (
        <Box className={clasess.mainContainer}>
            <IconButton className={clasess.listButton} onClick={(event) => setOpenMenu(event.currentTarget)}>
                <img src={add_circled} alt="" />
            </IconButton>
            <Menu
                open={isMenuOpen}
                anchorEl={openMenu}
                PaperProps={{
                    style: {
                        width: "auto",
                        height: "auto"
                    }
                }}
                onClose={handleClose}
            >
                <AddToList addRow={addRow} />
            </Menu>
        </Box>
    )
}

export default AddColume