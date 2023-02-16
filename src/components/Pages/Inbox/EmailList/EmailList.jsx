import React, {useEffect, useRef, useState} from "react";
import {Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import classes from "./EmailList.module.css";
import {
    clearHoverEmail,
    clearThreadEmail,
    fetchMessagesByLabelIds,
    hoverEmail,
    markAsRead,
    showEmail,
    starredMessage,
    trashMessageById,
    viewEmail
} from "../../../../redux/action/EmailCenter/action";
import checkBoxIcon from "../../../../Images/Bearish/checkbox_unchecked.svg";
import deleteIcon from "../../../../Images/Bearish/trash.svg";
import hourglassIcon from "../../../../Images/Bearish/hourglass.svg";
import mailIcon from "../../../../Images/Bearish/mail.svg";
import arrow_forwardIcon from "../../../../Images/Bearish/arrow_forward.svg";
import ReactTooltip from "../../../Common/Tooltip/ReactTooltip";
import {StarIcon} from "./StarIcon";

const EmailList = () => {

    const userMailRef = useRef(null);

    const navigate = useNavigate();
    const userMailsArray = useSelector(store => store?.emailCenter?.mails?.data?.messages || []);
    const selectedEmail = useSelector(store => store?.emailCenter?.selectedEmail);
    const labelIds = useSelector(store => store?.emailCenter?.labelIds);

    const dispatch = useDispatch();

    /** State*/

    const [mails, setMails] = useState(userMailsArray || []);

    /** Handler */
    const handleMouseEnter = (item, index) => {
        setMails(pre => pre.map((eachMail, eachMailIndex) => {
            return eachMailIndex === index ?
                {
                    ...eachMail,
                    hover: true
                } : eachMail
        }));
        dispatch(hoverEmail({item}))
    };

    const handleMouseLeave = (index) => {
        setMails(pre => pre.map((eachMail, eachMailIndex) => (
            {
                ...eachMail,
                hover: false
            })
        ));
        dispatch(clearHoverEmail());
        dispatch(clearThreadEmail({}));
    };

    const handleClickEmail = (item) => {
        dispatch(clearThreadEmail({}));
        dispatch(clearHoverEmail());
        dispatch(viewEmail({viewEmail: item}));
        navigate(`/email-center/${item?.threadId || item?.id}`);
        dispatch(showEmail({isShow: true}));
    };

    const dateFormat = (msec) => {
        let date = new Date(msec).toString();
        let emailDate = new Date(msec).toLocaleString().split(",")[0];
        let currentDate = new Date().toLocaleString().split(",")[0];
        let arr = date.split(" ");
        let time = moment(date).format("h:mm A");
        if (emailDate === currentDate) {
            return `${time}`;
        } else {
            return `${arr[1]} ${arr[2]}`;
        }
    };

    const handleMarkAsRead = (id, email) => {
        dispatch(markAsRead({id, email}));
        getMails(email)
    };

    const getMails = async (email) => {
        await dispatch(fetchMessagesByLabelIds({
            page: 1,
            perPage: 50,
            email: email,
            labelIds
        }));
    };

    const handleTrashMessage = (id, email) => {
        dispatch(trashMessageById({id, email}));
        getMails(email)
    };

    const handleStarEmail = (id) => {
        dispatch(starredMessage({id, email: selectedEmail.email}))
        getMails(selectedEmail.email)
    };

    /** Effects*/

    useEffect(() => {
        if (userMailsArray) {
            setMails(pre => userMailsArray);
        }
    }, [userMailsArray]);

    return (
        <>
            <Stack className={classes.listMain}>
                <Stack className={classes.rowMain} onMouseOut={() => handleMouseLeave()}>
                    {(mails || []).map((item, index) => (
                        <Stack key={index} ref={userMailRef} onMouseOver={() => handleMouseEnter(item, index)}>
                            <Stack className={classes.emailItem}>
                                <Stack direction={'row'} gap={'17.55px'}
                                       onClick={() => {
                                           handleClickEmail(item);
                                           handleMarkAsRead(item?.id || item?.threadId, selectedEmail?.email)
                                       }}>
                                    <Stack>
                                        <Stack direction={'row'} gap={'10.73px'}>
                                            <img src={checkBoxIcon} alt={''}/>
                                            <Stack onClick={() => handleStarEmail(item?.id || item?.threadId)}>
                                                <StarIcon
                                                    width={'19.84'}
                                                    color={item.labelIds.includes('STARRED') && '#FFA700'}/>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack direction={'row'} gap={'75px'}>
                                        <Stack
                                            fontWeight={item.read === 'READ' ? '' : 'bold'}
                                            className={classes.contactName}>
                                            {item?.name}
                                        </Stack>
                                        <Stack direction={'row'} gap={'30px'}>
                                            <Stack fontWeight={item.read === 'READ' ? '' : 'bold'}
                                                   className={classes.subject}>
                                                {item?.subject}
                                            </Stack>
                                            <Stack className={classes.emailDescription}>
                                                {item?.body}
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack>
                                    {item?.hover ? <Stack>
                                            <Stack marginLeft={'200px'} alignItems={'center'} direction={'row'}
                                                   gap={'20px'}>
                                                <ReactTooltip title={'Email'} fontWeight={'bold'}>
                                                    <img src={mailIcon} alt={''}
                                                         onClick={() => handleMarkAsRead(item?.id || item?.threadId, selectedEmail?.email)}/>
                                                </ReactTooltip>
                                                <ReactTooltip title={'Forward'} fontWeight={'bold'}>
                                                    <img src={arrow_forwardIcon} alt={''}/>
                                                </ReactTooltip>
                                                <ReactTooltip title={'Remind'} fontWeight={'bold'}>
                                                    <img src={hourglassIcon} alt={''}/>
                                                </ReactTooltip>
                                                <ReactTooltip title={'Trash'} fontWeight={'bold'}>
                                                    <img src={deleteIcon} alt={''}
                                                         onClick={() => handleTrashMessage(item?.id || item?.threadId, selectedEmail?.email)}/>
                                                </ReactTooltip>
                                            </Stack>

                                        </Stack>
                                        : <Stack>
                                            <Stack className={classes.receivedTime}
                                                   fontWeight={item.read === 'READ' ? '' : 'bold'}>
                                                {dateFormat(parseInt(item?.date))}
                                            </Stack>
                                        </Stack>}
                                </Stack>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </>
    )
};
export default EmailList;
