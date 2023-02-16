import { Button, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import classes from './StatusHeader.module.css'
import dwonArrow from '../../../../../../../Images/Bearish/chevron_down.svg'
import upArrow from '../../../../../../../Images/Bearish/chevron_up.svg'
import checkboxunchecked from '../../../../../../../Images/Bearish/checkbox_unchecked.svg'
import checkedcheckbox from '../../../../../../../Images/Bearish/checked-checkbox.svg'
import morevertical from '../../../../../../../Images/Bearish/more_vertical.svg'
import StatusData from '../StatusData/StatusData'


const StatusHeader = ({ item }) => {

    const [expandContent, setExpandContent] = useState(true);
    const [ischecked, setIschecked] = useState(false);

    return (
        <>
            <Stack className={classes.boardflexbox} sx={{ backgroundColor: `${item?.color}40` }}>
                <Stack className={classes.imgdisplay}>
                    <Button className={classes.imgpadding}>
                        <img src={expandContent ? dwonArrow : upArrow} alt='' onClick={() => setExpandContent(!expandContent)} />
                    </Button>
                    <Typography className={classes.typotext}>{item?.status}</Typography>
                </Stack>
                <Stack className={classes.imgdisplay}>
                    <IconButton onClick={() => setIschecked(!ischecked)}>
                        <img src={ischecked ? checkedcheckbox : checkboxunchecked} alt="checkboxunchecked" />
                    </IconButton>
                    <IconButton className={classes.verticalimg}>
                        <img src={morevertical} alt="morevertical" />
                    </IconButton>
                </Stack>
            </Stack>
            {expandContent && <StatusData item={item} />}
        </>
    )
}

export default StatusHeader
