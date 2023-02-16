import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Email from "./EmailList/Email/Email";
import {switchDrawerMode} from "../../../redux/action/Layout/action";
import {
    fetchMessagesByLabelIds, getTotalMessages,
    getUserLoggedEmail,
    loggedInEmail,
    selectedEmail
} from "../../../redux/action/EmailCenter/action";

const EmailCenter = () => {
    const dispatch = useDispatch();

    const userEmail = useSelector(store => store?.emailCenter?.labelIds);

    useEffect(() => {
        (async () => {
            dispatch(switchDrawerMode());
            await dispatch(getUserLoggedEmail({flow: 'emailCheck'})).then(async (res) => {
                const data = res.emailCenter.loggedEmail.loggedIn;
                dispatch(selectedEmail({
                    email: data.email,
                    type: data.type,
                    nickname: data.nickname
                }));
                await dispatch(loggedInEmail({emailId: data.email})).then(async (store) => {
                    dispatch(getTotalMessages({type: userEmail, email: data.email}));
                    await dispatch(fetchMessagesByLabelIds({
                        page: 1,
                        perPage: 50,
                        email: data.email,
                        labelIds: userEmail
                    }));
                });
            });
        })();
    }, []);
    return (
        <>
            <Email/>
        </>
    )
};


export default EmailCenter;
