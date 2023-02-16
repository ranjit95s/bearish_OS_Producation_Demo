import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import classes from "./TopBar.module.css";
import deleteIcon from "../../../../../Images/Bearish/trash.svg";
import backIcon from "../../../../../Images/Bearish/chevron_backward.svg";
import nextIcon from "../../../../../Images/Bearish/chevron_forward.svg";
import mailIcon from "../../../../../Images/Bearish/mail.svg";
import hourglassIcon from "../../../../../Images/Bearish/hourglass.svg";
import addIcon from "../../../../../Images/Bearish/add_circled.svg";
import infoIcon from "../../../../../Images/Bearish/info.svg";
import archiveIcon from "../../../../../Images/Bearish/archive.svg";
import nextArrowIcon from "../../../../../Images/Bearish/arrow_forward.svg";
import folderIcon from "../../../../../Images/Bearish/folder.svg";
import ReactTooltip from "../../../../Common/Tooltip/ReactTooltip";
import {clearAllMails, trashMessageById} from "../../../../../redux/action/EmailCenter/action";

const INITIAL_ARRAY = [
    {
        icon: archiveIcon,
        type: 'icon',
        hover: 'Archive',
        height: '20.83',
        width: '20.83'
    }, {
        icon: deleteIcon,
        type: 'icon',
        hover: 'Trash',
        height: '19.79',
        width: '19.79'
    }, {
        type: 'line'
    }, {
        icon: mailIcon,
        type: 'icon',
        hover: 'Email',
        width: '20.83',
        height: '16.67'
    }, {
        icon: hourglassIcon,
        type: 'icon',
        hover: 'Remind',
        width: '16.67',
        height: '20.83'
    }, {
        icon: nextArrowIcon,
        type: 'icon',
        hover: 'Forward',
        height: '14.8',
        width: '17.58'
    }, {
        type: 'line'
    }, {
        icon: folderIcon,
        type: 'icon',
        hover: 'Move to…',
        height: '20.83',
        width: '18.75'
    }, {
        icon: addIcon,
        type: 'icon',
        hover: 'Add to Task',
        height: '20.83',
        width: '20.83'
    }, {
        icon: infoIcon,
        type: 'icon',
        hover: 'Info',
        height: '20.83',
        width: '20.83'
    },
];

const TopBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailData = useSelector(store => store?.emailCenter?.viewEmail);
    const selectedEmail = useSelector(store => store?.emailCenter?.selectedEmail);

    const [state, setState] = useState(INITIAL_ARRAY);

    /** Handler */
    const handleClick = (index, key) => {
        setState(pre => pre.map((eachIcon, eachIconIndex) => {
            return eachIconIndex === index ? {
                ...eachIcon,
                select: !eachIcon?.select
            } : eachIcon
        }))
        switch (key) {
            case "Trash" : {
                return handleDeleteEmail();
            }
        }
    };

    const handleDeleteEmail = async () => {
        await dispatch(trashMessageById({id: emailData?.id || emailData?.threadId, email: selectedEmail?.email}));
        dispatch(clearAllMails());
        navigate("/email-center");
    };


    return (
        <>
            <Stack fontFamily={'Source Serif Pro'} width={'100%'}>
                <Stack className={classes.topBarMain}>
                    <Stack direction={'row'} gap={'22px'} alignItems={'center'}>
                        {(state || []).map((item, index) => (
                            <>
                                {item.type === 'icon' ?
                                    <ReactTooltip key={index} title={item.hover} fontWeight={'bold'}>
                                        <Stack sx={{
                                            backgroundColor: item?.select && '#d7f8e7',
                                            paddingX: `${((25 - Number(item.width)) / 2)}px`,
                                            paddingY: `${((25 - Number(item.height)) / 2)}px`,
                                            borderRadius: '5px'
                                        }}>
                                            <img src={item.icon} alt={''} width={'100%'} height={'100%'}
                                                 onClick={() => handleClick(index, item.hover)}/>
                                        </Stack>
                                    </ReactTooltip>
                                    : <Stack className={classes.verticalLine}/>}
                            </>
                        ))}
                    </Stack>
                    <Stack alignItems={'center'} direction={'row'} gap={'10px'}>
                        <Stack>
                            0 of 00000
                        </Stack>
                        <img style={{cursor: 'pointer'}} src={backIcon} alt={''}/>
                        <img style={{marginLeft: '15px', cursor: 'pointer'}} src={nextIcon} alt={''}/>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default TopBar;
