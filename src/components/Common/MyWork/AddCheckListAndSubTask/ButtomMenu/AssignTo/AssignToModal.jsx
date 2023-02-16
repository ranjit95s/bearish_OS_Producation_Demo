import React, { useState } from "react";
import { Popover, Stack } from "@mui/material";
import classes from "./AssignToModal.module.css";
import searchIcon from "../../../../../../Images/Bearish/search.svg";

const INITIAL_ARRAY = [{
    name: 'milan kodinariya'
}, {
    name: 'ailan kodinariya'
}, {
    name: 'bilan kodinariya'
}, {
    name: 'cilan kodinariya'
}, {
    name: 'dilan kodinariya'
}, {
    name: 'rilan kodinariya'
}, {
    name: 'tilan kodinariya'
}, {
    name: 'yilan kodinariya'
}, {
    name: 'uilan kodinariya'
}, {
    name: 'iilan kodinariya'
}, {
    name: 'oilan kodinariya'
}, {
    name: 'wilan kodinariya'
}, {
    name: 'qilan kodinariya'
},
];

const AssignToModal = () => {
    const searchUserName = (name) => {
        const userName = name.split(" ");
        return userName?.[0].charAt(0).toLocaleUpperCase() + "" + userName?.[1].charAt(0).toLocaleUpperCase()
    };
;
    return (
        <>
                <Stack fontFamily={'Source Serif Pro'}>
                    <Stack gap={'5px'} height={'175px'} padding={'5px 10px 5px 10px'}>
                        <Stack direction={'row'} gap={'5px'}>
                            <img alt={''} style={{ width: '15px' }} src={searchIcon} />
                            <input placeholder={'Search'} className={classes.assignToSearch} type={'text'} />
                        </Stack>
                        <Stack className={classes.darkLink} />
                        <Stack sx={{ height: '100%', overflowY: 'scroll', gap: '5px' }}>
                            {(INITIAL_ARRAY || []).map((item, index) => (
                                <>
                                    <Stack key={index} direction={'row'} gap={'4px'}>
                                        <Stack className={classes.searchUserIcon}>
                                            {searchUserName(item.name)}
                                        </Stack>
                                        <Stack className={classes.searchUserName}>
                                            {item.name}
                                        </Stack>
                                    </Stack>
                                </>
                            ))}
                        </Stack>
                        <Stack alignItems={'center'}>
                            <Stack className={classes.assignNowBtn}>
                                Assign Now
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
        </>
    )
};
export default AssignToModal;
