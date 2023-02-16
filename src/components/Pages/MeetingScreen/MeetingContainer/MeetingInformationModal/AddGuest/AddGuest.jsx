import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import classes from "./AddGuest.module.css";
import searchIcon from "../../../../../../Images/Bearish/search.svg"

const INITIAL_ARRAY = [
    {
        name: 'First Name',
        email: 'milankodinariya1995@gmail.com'
    }, {
        name: 'milan kodinariya',
        email: 'milankodinariya1995@gmail.com'
    }, {
        name: 'milan kodinariya',
        email: 'milankodinariya1995@gmail.com'
    }, {
        name: 'milan kodinariya',
        email: 'milankodinariya1995@gmail.com'
    }, {
        name: 'milan kodinariya',
        email: 'milankodinariya1995@gmail.com'
    }, {
        name: 'milan kodinariya',
        email: 'milankodinariya1995@gmail.com'
    },
];

const AddGuest = () => {

    const [state, setState] = useState(INITIAL_ARRAY);

    const listName = (name) => {
        const userName = name.split(" ");
        return userName?.[0]?.charAt(0).toLocaleUpperCase() + "" + userName?.[1]?.charAt(0).toLocaleUpperCase()
    };

    return (
        <>
            <Stack className={classes.addGuestMain}>
                <Stack padding={'17px 22px 3px 0'}>
                    <Stack paddingLeft={'8px'} direction={'row'} gap={'5px'}>
                        <img src={searchIcon} alt={''}/>
                        <input placeholder={'Search Users'} className={classes.search}/>
                    </Stack>
                    <Stack className={classes.title}>
                        View guests in waiting room
                    </Stack>
                    <Stack className={classes.listMain}>
                        {(state || []).map((value, index) => (
                            <Stack key={index} className={classes.columnMain} direction={'row'} gap={'10px'}>
                                <Stack className={classes.userIcon}>
                                    {listName(value.name)}
                                </Stack>
                                <Stack gap={'5px'}>
                                    <Stack className={classes.name}>
                                        {value.name}
                                    </Stack>
                                    <Stack className={classes.email}>
                                        {value.email}
                                    </Stack>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default AddGuest;
