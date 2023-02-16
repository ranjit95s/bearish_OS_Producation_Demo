import React, {useState} from "react";
import {Stack} from "@mui/material";
import classes from "./SearchModal.module.css";
import searchIcon from "../../../../../../../Images/Bearish/search.svg";

const INITIAL_ARRAY = [
    {
        name: 'First Name',
        callName: 'Call Name',
        dateTime: '00/00/0000 00:00 AM',
        email: 'test@gmail.com'
    }, {
        name: 'First Name',
        callName: 'Call Name',
        dateTime: '00/00/0000 00:00 AM',
        email: 'test@gmail.com'
    }, {
        name: 'First Name',
        callName: 'Call Name',
        dateTime: '00/00/0000 00:00 AM',
        email: 'test@gmail.com'
    }, {
        name: 'First Name',
        callName: 'Call Name',
        dateTime: '00/00/0000 00:00 AM',
        email: 'test@gmail.com'
    },
];

const SearchModal = () => {

    const [state, setState] = useState(INITIAL_ARRAY);

    const listName = (name) => {
        const userName = name.split(" ");
        return userName?.[0]?.charAt(0).toLocaleUpperCase() + "" + userName?.[1]?.charAt(0).toLocaleUpperCase()
    };

    return (
        <>
            <Stack className={classes.modalMain}>
                <Stack padding={'17px 22px 38px 8px'}>
                    <Stack gap={'22px'}>
                        <Stack direction={'row'}>
                            <Stack>
                                <img alt={''} src={searchIcon}/>
                            </Stack>
                            <input placeholder={'Search Call History'} className={classes.search} type={'text'}/>
                        </Stack>
                        <Stack className={classes.listMain}>
                            {(state || []).map((value, index) => (
                                <Stack key={index} direction={'row'} gap={'10px'}>
                                    <Stack className={classes.userIcon}>
                                        {listName(value.name)}
                                    </Stack>
                                    <Stack gap={'5px'}>
                                        <Stack className={classes.userName}>
                                            {value.callName}
                                        </Stack>
                                        <Stack className={classes.font}>
                                            {value.dateTime}
                                        </Stack>
                                    </Stack>
                                    <Stack gap={'5px'}>
                                        <Stack className={classes.userName}>
                                            {value.name}
                                        </Stack>
                                        <Stack className={classes.font}>
                                            {value.email}
                                        </Stack>
                                    </Stack>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default SearchModal;