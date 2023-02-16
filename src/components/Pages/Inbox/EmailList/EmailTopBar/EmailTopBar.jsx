import React, {useState} from "react";
import {Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import classes from "./EmailTopBar.module.css";
import checkBoxIcon from "../../../../../Images/Bearish/checkbox_unchecked.svg"
import syncIcon from "../../../../../Images/Bearish/sync.svg"
import backIcon from "../../../../../Images/Bearish/chevron_backward.svg"
import nextIcon from "../../../../../Images/Bearish/chevron_forward.svg"
import {fetchMessagesByLabelIds} from "../../../../../redux/action/EmailCenter/action";

const EmailTopBar = () => {
    const dispatch = useDispatch();

    const totalMessages = useSelector(store => store?.emailCenter?.totalMessages);
    const selectedEmail = useSelector(store => store?.emailCenter?.selectedEmail);
    const pagination = useSelector(store => store?.emailCenter?.mails?.pagination);

    const total = totalMessages?.Result?.threadsTotal;

    const [state, setState] = useState({page: 1});
    const [token, setToken] = useState([]);

    let calStart = 0, calEnd = 0;
    if (selectedEmail?.type === "outlook") {
        calStart = (state.page * 10) - 9
        calEnd = state.page * 10 < total ? state.page * 10 : total

        if (calStart > calEnd) {
            calStart = ((state.page - 1) * 10) - 9
        }

        if (calStart < 0) {
            calStart = 0;
        }
    } else {
        calStart = (state.page * 50) - 49
        calEnd = state.page * 50 < total ? state.page * 50 : total

        if (calStart > calEnd) {
            calStart = ((state.page - 1) * 50) - 49
        }

        if (calStart < 0) {
            calStart = 0;
        }
    }

    const nextPageHandler = () => {
        dispatch(fetchMessagesByLabelIds({
            page: state.page,
            perPage: pagination?.perPage,
            email: selectedEmail?.email,
            labelIds: 'INBOX',
            nextPage: token[token.length - 1] || pagination?.nextPageToken
        }));
        setToken([...token, pagination?.nextPageToken]);
        setState(pre => ({...pre, page: pre.page + 1}));
    };

    const prevPageHandler = () => {
        const token = state?.token[state?.token?.length - 3] === undefined ? "" : state?.token[state?.token?.length - 3];
        dispatch(fetchMessagesByLabelIds({
            page: state.page,
            perPage: pagination?.perPage,
            email: selectedEmail?.email,
            labelIds: 'INBOX',
            nextPage: token[token.length - 3] === undefined ? "" : token[token.length - 3]
        }));
        let arr = [...token];
        arr.splice(arr.length - 1);
        setToken([...arr]);
        setState(pre => ({...pre, page: pre.page === 1 ? 1 : pre.page - 1}));
    };

    return (
        <>
            <Stack>
                <Stack className={classes.emailTopBarMain}>
                    <Stack className={classes.emailTop}>
                        <Stack direction={'row'} gap={'10px'}>
                            <img style={{width: '20px'}} src={checkBoxIcon} alt={''}/>
                            <img style={{width: '20px'}} src={syncIcon} alt={''}/>
                        </Stack>
                        <Stack className={classes.numberOfEmail}>
                            <Stack>
                                {calStart <= calEnd ? ` ${calStart} - ${calEnd} of ${total}` : ""}
                            </Stack>
                            <Stack direction={'row'} gap={'5px'}>
                                <button className={classes.buttons} disabled={state.page === 1}
                                        onClick={prevPageHandler}>
                                    <img src={backIcon} alt={''}/>
                                </button>
                                <button className={classes.buttons} disabled={state.page * 50 >= total}
                                        onClick={nextPageHandler}>
                                    <img src={nextIcon} alt={''}/>
                                </button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default EmailTopBar;
