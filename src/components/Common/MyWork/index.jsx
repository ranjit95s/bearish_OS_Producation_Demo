import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import classes from "./MyWork.module.css";
import Feed from "./Feed";
import UnreadMail from "./UnreadMail";
import UpComingCalls from "./UpComingCalls";
import ToDo from "./ToDo";

const INITIAL_ARRAY = [{
    name: 'Feed',
    value: 'feed',
    select: false,

}, {
    name: 'Unread Mail',
    value: 'unreadMail',
    select: false,

}, {
    name: 'Upcoming Calls',
    value: 'upcomingCalls',
    select: false,

}, {
    name: 'To do',
    value: 'toDo',
    select: false,

}];

const MyWork = () => {

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
            <Stack className={classes.My_Work_Main}>
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
                {select === 'feed' && <Feed/>}
                {select === 'unreadMail' && <UnreadMail/>}
                {select === 'upcomingCalls' && <UpComingCalls/>}
                {select === 'toDo' && <ToDo/>}
            </Stack>
        </>
    )
};
export default MyWork;
