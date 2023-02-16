import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Stack} from "@mui/material";
import {clearThreadEmail, getThreadById} from "../../../../redux/action/EmailCenter/action";
import classes from "./EmailPreview.module.css";

const EmailPreview = () => {
    const dispatch = useDispatch();

    const previewMailInfo = useSelector(store => store.emailCenter?.hoverEmail);
    const selectedEmail = useSelector(store => store?.emailCenter?.selectedEmail);

    const [state, setState] = useState();
    const [messages, setMessages] = useState();

    /** Handler*/

    const getUserName = (name) => {
        return name?.charAt(0).toLocaleUpperCase()
    };

    const getMailData = async () => {
        try {
            await dispatch(clearThreadEmail({}));
            await dispatch(getThreadById({
                threadId: previewMailInfo?.id || previewMailInfo?.threadId,
                email: selectedEmail.email
            })).then(store => {
                const threadMailData = store.emailCenter.threadMail;
                setMessages(() => threadMailData?.Result?.data?.messages);
            });
        } catch (e) {
            console.log("Error :", e)
        }
    };

    /** Effects*/

    useEffect(() => {

        const timer = setTimeout(() => {
            if (Object.keys(previewMailInfo)?.length > 0) {
                let fromData = previewMailInfo.from;
                fromData = selectedEmail.type === "outlook" ? fromData?.emailAddress?.address : fromData?.split(" ")?.[0];
                setState(pre => ({...pre, from: fromData}));

                (async () => {
                    await getMailData();
                })();
            }
        }, 1000);
        return () => clearTimeout(timer)

    }, [Object.keys(previewMailInfo)?.length > 0]);

    return (
        <>
            <Stack className={classes.emailPreviewMain}>
                <Stack gap={'10px'} padding={'10px 15px 25px 10px'}>
                    <Stack alignItems={'center'} direction={'row'} gap={'10px'}>
                        <Stack className={classes.userIcon}>
                            {getUserName(previewMailInfo?.from)}
                        </Stack>
                        <Stack className={classes.senderName}>
                            {state?.from}
                        </Stack>
                    </Stack>
                    <Stack className={classes.subjectLine}>
                        <Stack className={classes.subject}>
                            {previewMailInfo?.subject}
                        </Stack>
                    </Stack>
                    <Stack className={classes.emailDescription}>

                        <div className={classes.snippetInfo}>
                            <div className={classes.mailPageBoxFour}>
                                {selectedEmail.type === "outlook" ?
                                    <div className="outlookHtmlContent"
                                         dangerouslySetInnerHTML={{__html: previewMailInfo?.body?.content}}/> : ""}
                                {(messages || []).map((message, index) => {
                                    return (
                                        <iframe
                                            key={index}
                                            className={classes.emailMessage}
                                            src={`data:${message?.payload?.mimeType};base64,${message?.payload?.body?.data?.replaceAll("-", "+")?.replaceAll("_", "/")}`}/>
                                    );
                                })}
                            </div>
                        </div>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default EmailPreview;
