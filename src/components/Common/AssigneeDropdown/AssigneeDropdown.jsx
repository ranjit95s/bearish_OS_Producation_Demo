import React, { useState } from 'react'
import { Stack } from '@mui/system';
import upIcon from "../../../Images/Bearish/chevron_up.svg";
import downIcon from "../../../Images/Bearish/chevron_down.svg";
import classes from './AssigneeDropdown.module.css'
import searchIcon from '../../../Images/Bearish/search.svg'
import { Menu, Typography } from '@mui/material';

const AssigneeDropdown = () => {

    const INITIAL_ARRAY = [
        {
            id: '1',
            name: 'Full Name',
            email: 'bearishtestemail@gamil.com'
        },
        {
            id: '2',
            name: 'Full Name',
            email: 'bearishtestemail@gamil.com'
        },
        {
            id: '3',
            name: 'Full Name',
            email: 'bearishtestemail@gamil.com'
        },
        {
            id: '4',
            name: 'Full Name',
            email: 'bearishtestemail@gamil.com'
        }
    ];

    const searchUserName = (name) => {
        const userName = name.split(" ");
        return userName?.[0].charAt(0).toLocaleUpperCase() + "" + userName?.[1].charAt(0).toLocaleUpperCase()
    };

    const [anchorEl, setAnchorEl] = useState(false);
    const [selectedValue, setSelectedValue] = useState("")
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (name) => {
        setSelectedValue(name);
    }

    return (
        <>
            <Stack className={classes.selectView} onClick={(event) => setAnchorEl(event.currentTarget)}>
                <Stack className={classes.selectTab}>
                    <Typography className={classes.selectedText} >{selectedValue}</Typography>
                    <img src={anchorEl ? downIcon : upIcon} alt={''} />
                </Stack>
            </Stack>
            <Menu
                open={open}
                anchorEl={anchorEl}
                PaperProps={{
                    style: {
                        width: "320px",
                        height: "275px"
                    }
                }}
                onClose={handleClose}
            >
                <Stack fontFamily={'Source Serif Pro'}>
                    <Stack gap={'5px'} padding={'5px 10px 5px 10px'}>
                        <Stack direction={'row'} gap={'5px'} className={classes.searchConatiner} >
                            <img alt={''} className={classes.serchIcon} src={searchIcon} />
                            <input placeholder='Search Users' className={classes.assignToSearch} type={'text'} />
                        </Stack>
                        <Stack sx={{ height: '100%', overflowY: 'scroll', gap: '5px' }}>
                            {(INITIAL_ARRAY || []).map((item, index) => (
                                <React.Fragment key={index}>
                                    <Stack onClick={() => setAnchorEl(null)}>
                                        <Stack key={index} direction={'row'} gap={'4px'} className={classes.dropDownContainer} onClick={() => handleSelect(item.name)} >
                                            <Stack className={classes.searchUserIcon}>
                                                {searchUserName(item.name)}
                                            </Stack>
                                            <Stack className={classes.rightSideContainer} >
                                                <Stack className={classes.searchUserName}>
                                                    {item.name}
                                                </Stack>
                                                <Stack className={classes.UserEmail}>
                                                    {item.email}
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </React.Fragment>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Menu>
        </>
    )
}


export default AssigneeDropdown;