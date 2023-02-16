import { Box } from '@mui/system'
import React, { useState } from 'react'
import checked_checkbox from "../../../../../../../Images/Bearish/checked-checkbox.svg"
import checkbox_unchecked from "../../../../../../../Images/Bearish/checkbox_unchecked.svg"

const CheckListRender = () => {
    const [checked, setChecked] = useState(false)
    return (
        <Box onClick={() => setChecked(!checked)} sx={{cursor: "pointer", display: "flex", justifyContent: "center", width: "100%"}} >
            <img src={checked ? checked_checkbox : checkbox_unchecked} alt=""  />
        </Box>
    )
}

export default CheckListRender
