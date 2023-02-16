import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import classes from "./QuickView.module.css";
import Chat from "./Chat";
import Sell from "./Sell";
import Write from "./Write";
import Publish from "./Publish";

const INITIAL_ARRAY = [{
    name: 'Chat',
    value: 'chat',
    select: false,

}, {
    name: 'Sell',
    value: 'sell',
    select: false,

}, {
    name: 'Write',
    value: 'write',
    select: false,

}, {
    name: 'Publish',
    value: 'publish',
    select: false,

}];

const QuickView = () => {

    const [state, setState] = useState(INITIAL_ARRAY);
    const [select, setSelect] = useState();

    const handleSelect = (value, index) => {
        setState((each) =>
            each.map((eachMenu, eachMenuIndex) => {
                return eachMenuIndex === index ?
                    {
                        ...eachMenu,
                        select: true
                    } : {
                        ...eachMenu,
                        select: false
                    }
            })
        )
        setSelect(value)
    };

    return (
        <>
            <Stack className={classes.Quick_View_Main}>
                <Stack className={classes.title}>
                    My Work
                </Stack>
                <Stack direction={'row'} gap={'20px'}>
                    {(state || []).map((item, i) => (
                        <Stack key={i} gap={'3px'}>
                            <Stack className={classes.header_name} onClick={() => handleSelect(item.value, i)}>
                                {item.name}
                            </Stack>
                            {item.select && <Stack className={classes.green_line}/>}
                        </Stack>
                    ))}
                </Stack>
                {select === 'chat' && <Chat/>}
                {select === 'sell' && <Sell/>}
                {select === 'write' && <Write/>}
                {select === 'publish' && <Publish/>}
            </Stack>
        </>
    )
};
export default QuickView;
