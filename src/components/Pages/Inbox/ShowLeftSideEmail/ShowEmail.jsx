import React, {useState} from "react";
import {Stack} from "@mui/material";
import ReactTooltip from "../../../Common/Tooltip/ReactTooltip";
import classes from "./ShowEmail.module.css";

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

const ShowEmail = () => {

    const [state, setState] = useState(INITIAL_ARRAY);

    const getUserName = (name) => {
        const userName = name.split(" ");
        return userName?.[0].charAt(0).toLocaleUpperCase() + "" + userName?.[1].charAt(0).toLocaleUpperCase()
    };
    return (
        <>
            <Stack alignItems={'center'}>
                {(state || []).map((item, index) => (
                    <>
                        <Stack key={index} alignItems={'center'}>
                            <Stack className={classes.line}/>
                            <ReactTooltip title={'Sender Full Name 00/00/000'} position={'right'}>
                                <Stack className={classes.emailUserIcon}>
                                    {getUserName(item.name)}
                                </Stack>
                            </ReactTooltip>
                        </Stack>
                    </>
                ))}
                <Stack className={classes.line}/>
            </Stack>
        </>
    )
};
export default ShowEmail;
