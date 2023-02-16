import React, {useState} from "react";
import {Stack} from "@mui/material";
import classes from "./LeftPart.module.css";
import DatePart from "./DatePart/DatePart";
import AddOptions from "./AddOptions/AddOptions";
import Cards from "./Cards";
import Label from "./Labels/Label";

const INITIAL_ARRAY = [
    {
        title: 'Start a Meeting',
        bgColor: '#bee8ff'
    }, {
        title: 'Schedule a Meeting',
        bgColor: '#ecbed6'
    }, {
        title: 'Join an active call',
        bgColor: '#f7e0d7'
    }
];

const LeftPart = () => {

    const [state, setState] = useState(INITIAL_ARRAY);

    return (
        <>
            <Stack className={classes.leftPartMain}>
                <Stack padding={'20px'}>
                    <Stack direction={'row'} gap={'20px'}>
                        <Stack className={classes.userIcon}>

                        </Stack>
                        <Stack gap={'5px'} justifyContent={'center'}>
                            <Stack className={classes.name}>
                                Welcome
                            </Stack>
                            <Stack className={classes.name}>
                                [First Name of user],
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack marginTop={'20px'}>
                        <DatePart/>
                    </Stack>
                    <Stack marginTop={'10px'}>
                        <AddOptions/>
                    </Stack>
                    <Stack gap={'20px'}>
                        <Stack marginTop={'20px'}>
                            <Cards/>
                        </Stack>
                        <Stack gap={'20px'}>
                            {(state || []).map((value, index) => (
                                <Label key={index} {...value}/>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default LeftPart;
