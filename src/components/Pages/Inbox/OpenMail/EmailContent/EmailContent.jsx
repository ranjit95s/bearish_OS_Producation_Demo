import React, {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import axios from "axios";
import undoIcon from "../../../../../Images/Bearish/undo.svg";
import ComposeEmail from "../../ComposeEmail/ComposeEmail";
import ReactTooltip from "../../../../Common/Tooltip/ReactTooltip";
import classes from "./EmailContent.module.css";
import {getThreadById} from "../../../../../redux/action/EmailCenter/action";

const EmailContent = () => {
    const {threadId} = useParams();

    const dispatch = useDispatch();

    const emailData = useSelector(store => store?.emailCenter?.viewEmail);
    const selectedEmail = useSelector(store => store?.emailCenter?.selectedEmail);
    const threadMail = useSelector(store => store?.emailCenter?.threadMail?.Result?.data?.messages);

    const [state, setState] = useState();

    /** Handler */

    const handleCloseComposeEmail = () => setState(pre => ({...pre, composeEmail: false}));

    const senderEmailAddress = (from) => {
        return from?.split("<")[1];
    };

    const getDate = () => moment(parseInt(threadMail?.[0]?.internalDate)).format('LLLL');
    const getAvatar = (str) => {
        const decoded = decodeURIComponent(str.replace("<", "").replace("/\\,(?=[^>]*$)/", ""));
        axios.get(`https://en.gravatar.com/${decoded}.json`, {"crossdomain": true})
            .catch(function (error) {
                if (error.response.status) {
                    //Get Domain from email
                    let strCopy = str.split("@").toString();
                    strCopy = strCopy.split(",");
                    console.log({logo: `https://logo.clearbit.com/${strCopy[strCopy.length - 1].slice(0, -1)}`})
                    //call clearbit logo API
                    setState(pre => ({
                        ...pre,
                        logo: `https://logo.clearbit.com/${strCopy[strCopy.length - 1].slice(0, -1)}`
                    }))
                }
            })
    };


    /** Effects */

    useEffect(() => {
        (() => {
            dispatch(getThreadById({threadId, email: selectedEmail?.email}))
            getAvatar(emailData?.from)
        })();
    }, []);

    return (
        <>
            <Stack className={classes.mailContentMain}>
                <Stack className={classes.previewMain}>
                    <Stack fontSize={'15px'} fontWeight={600}>
                        {emailData?.subject}
                    </Stack>
                    <Stack className={classes.mailDetail}>
                        <Stack direction={'row'} gap={'10px'}>
                            <Stack className={classes.userImage}>
                                <img className={classes.image} src={state?.logo} alt={''}/>
                            </Stack>
                            <Stack gap={'10px'}>
                                <Stack alignItems={'center'} direction={'row'} gap={'20px'}>
                                    <Stack fontSize={'15px'}>
                                        {emailData?.name}
                                    </Stack>
                                    <Stack fontSize={'11px'} sx={{opacity: 0.6}}>
                                        {`<${senderEmailAddress(emailData?.from)}`}
                                    </Stack>
                                </Stack>
                                <Stack fontSize={'11px'} sx={{opacity: 0.6}}>
                                    {emailData?.to}
                                </Stack>

                            </Stack>
                        </Stack>
                        <Stack direction={'row'} gap={'12px'}>
                            <Stack fontSize={'11px'} sx={{opacity: 0.6}}>
                                {getDate() || ''}
                            </Stack>
                            <Stack>
                                <ReactTooltip title={'Reply'} fontWeight={'bold'}>
                                    <img
                                        onClick={() => setState(pre => ({...pre, composeEmail: true}))}
                                        src={undoIcon}
                                        style={{cursor: 'pointer'}}
                                        alt={''}/>
                                </ReactTooltip>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack className={classes.preview}>
                        {(threadMail || []).map((message, index) => <iframe
                            key={index}
                            className={classes.emailMessage}
                            src={`data:${message?.payload?.mimeType};base64,${message?.payload?.body?.data?.replaceAll("-", "+")?.replaceAll("_", "/")}`}/>
                        )}
                    </Stack>
                </Stack>
                {state?.composeEmail ? <Stack className={classes.bottomSubjectEmail}>
                    <ComposeEmail handleClose={handleCloseComposeEmail}/>
                </Stack> : <> </>}
            </Stack>
        </>
    )
};
export default EmailContent;
