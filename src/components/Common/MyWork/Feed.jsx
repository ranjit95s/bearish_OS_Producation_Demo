import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import sendIcon from "../../../Images/Bearish/send.svg";
import classes from "./Feed.module.css";

const INITIAL_ARRAY = [
    {
        name: 'Milan Kodinariya',
        message: '',
        sender: true
    },
    {
        name: 'Milan Kodinariya',
        message: ''
    }, {
        name: 'Milan Kodinariya',
        message: 'Welcome to Bearish OS! We’re thrilled to have you! This is your company feed, a place where anyone can send you a message.',
        sender: true
    }, {
        name: 'Milan Kodinariya',
        message: 'Welcome to Bearish OS! We’re thrilled to have you! This is your company feed, a place where anyone can send you a message.',
        sender: true
    }, {
        name: 'Milan Kodinariya',
        message: ''
    }, {
        name: 'Milan Kodinariya',
        message: ''
    }, {
        name: 't t',
        message: 'Welcome to Bearish OS! We’re thrilled to have you! This is your company feed, a place where anyone can send you a message.'
    }, {
        name: 'Milan Kodinariya',
        message: 'Welcome to Bearish OS! We’re thrilled to have you! This is your company feed, a place where anyone can send you a message.'
    }, {
        name: 'Milan Kodinariya',
        message: '',
        sender: true
    },
    {
        name: 'Milan Kodinariya',
        message: 'Welcome to Bearish OS! We’re thrilled to have you! This is your company feed, a place where anyone can send you a message Welcome to Bearish OS! We’re thrilled to have you! This is your company feed, a place where anyone can send you a message.'
    }];

const Feed = () => {
    const [state, setState] = useState(INITIAL_ARRAY);

    const getInitial = (name) => {

        const fName = name.split(" ")?.[0].charAt(0).toUpperCase();
        const lName = name.split(" ")?.[1].charAt(0).toUpperCase();
        return fName + "" + lName;
    };
    return (
        <>
            <Stack height={'585px'} gap={'10px'} justifyContent={'space-between'}>
                <Stack className={classes.messageListMain}>
                    {(state || []).map((item, i) => (
                        <Stack key={i} className={classes.message}
                               sx={{backgroundColor: item.sender ? '#fff' : '#E9EDF2'}}>
                            <Stack>
                                <Stack className={classes.nameIcon}>
                                    {getInitial(item.name)}
                                </Stack>
                            </Stack>
                            <Stack className={classes.messageText}>
                                {item.message}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
                <Stack className={classes.typeMessageMain}>
                    <Stack className={classes.typeMessage}>
                        <div className={classes.messageInput} contentEditable="true"/>
                    </Stack>
                    <Stack className={classes.sendIcon}>
                        <img style={{width: '20px', height: '20px'}} src={sendIcon} alt={''}/>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default Feed;
