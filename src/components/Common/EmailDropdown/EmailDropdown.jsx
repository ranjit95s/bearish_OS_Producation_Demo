import React, {useState} from "react";
import {Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import classes from "./EmailDropdown.module.css";
import {
    clearListLabels, createLabel,
    fetchMessagesByLabelIds,
    getTotalMessages,
    getUserLoggedEmail,
    listLabels, setLabelIds
} from "../../../redux/action/EmailCenter/action";
import email from "../../../Images/Bearish/mail.svg"
import settingsIcon from "../../../Images/Bearish/settings.svg"
import upIcon from "../../../Images/Bearish/chevron_up.svg"
import downIcon from "../../../Images/Bearish/chevron_down.svg"
import folderIcon from "../../../Images/Bearish/folder.svg"
import deleteIcon from "../../../Images/Bearish/trash.svg"
import starIcon from "../../../Images/Bearish/star.svg"
import sendIcon from "../../../Images/Bearish/send.svg"
import alarmIcon from "../../../Images/Bearish/alarm.svg"
import outboxIcon from "../../../Images/Bearish/inbox.svg"
import draftsIcon from "../../../Images/Bearish/document.svg"
import folder_addIcon from "../../../Images/Bearish/folder_add.svg"
import CreateNewFolder from "../CreateNewFolder/CreateNewFolder";

const INITIAL_ARRAY = [
    {
        name: 'Outbox',
        icon: outboxIcon,
        labelId: 'INBOX'
    }, {
        name: 'Starred',
        icon: starIcon,
        labelId: 'STARRED'
    }, {
        name: 'Sent',
        icon: sendIcon,
        labelId: 'SENT'
    }, {
        name: 'Drafts',
        icon: draftsIcon,
        labelId: 'DRAFT'
    }, {
        name: 'Scheduled',
        icon: alarmIcon,
        labelId: 'SCHEDULED'
    }, {
        name: 'Trash',
        icon: deleteIcon,
        labelId: 'TRASH'
    }
];

const EmailDropdown = (props) => {
    const {nickname} = props;
    const dispatch = useDispatch();

    const selectedEmail = useSelector(store => store?.emailCenter?.selectedEmail);
    const folderDropdown = useSelector(store => store?.emailCenter?.listLabels?.data?.data?.labels);

    const [state, setState] = useState({dropdown: false, folderDropdown: false});
    const [mailDropdown, setMailDropdown] = useState(INITIAL_ARRAY);

    const handleCreateFolder = (value) => {

        dispatch(createLabel({name: value})).then(store => {
            if (store?.emailCenter?.createLabel) {
                // setState(pre => ({...pre, createFolder: false}))
            }
            setState(pre => ({...pre, createFolder: false}))
        })
    };

    const handelLabel = async (labelIds, email) => {
        await dispatch(getUserLoggedEmail({flow: 'emailCheck'}));
        await dispatch(getTotalMessages({type: labelIds, email}));
        dispatch(setLabelIds({labelId: labelIds}));
        await dispatch(fetchMessagesByLabelIds({
            page: 1,
            perPage: 50,
            email,
            labelIds
        }));
    };

    const handleClickFolderDropdown = async () => {
        await setState(pre => ({...pre, folderDropdown: !pre.folderDropdown}));
        if (!state.folderDropdown) {
            dispatch(listLabels({email: selectedEmail?.email}))
        } else {
            dispatch(clearListLabels())
        }
    };

    return (
        <>
            <Stack gap={'20px'}>
                <Stack className={classes.dropdownMain}
                       sx={{backgroundColor: state.dropdown ? '#afb4e7' : '#E9EDF2'}}
                       onClick={() => setState(pre => ({...pre, dropdown: !pre.dropdown, folderDropdown: false}))}>
                    <img src={email} alt={''}/>
                    <Stack className={classes.emailName}>
                        {nickname}
                    </Stack>
                    <img className={classes.settingIcon} src={settingsIcon} alt={''}/>
                    <img className={classes.upIcon} src={state.dropdown ? downIcon : upIcon} alt={''}/>
                </Stack>
                {state.dropdown ? <Stack className={classes.dropdown}>
                    <Stack gap={'20px'}>
                        {(mailDropdown || []).map((item, index) => (
                            <Stack key={index} direction={'row'} className={classes.mailDropdownItem}
                                   onClick={() => handelLabel(item.labelId, selectedEmail?.email)}>
                                <img src={item.icon} alt={''}/>
                                <Stack className={classes.itemName}>
                                    {item.name}
                                </Stack>
                            </Stack>
                        ))}
                        <Stack>
                            <Stack className={classes.folderMain}
                                   sx={{backgroundColor: state.folderDropdown ? '#afb4e7' : '#E9EDF2'}}
                                   onClick={handleClickFolderDropdown}>
                                <img src={folderIcon} alt={''}/>
                                <Stack className={classes.folderTitle}>
                                    Folders
                                </Stack>
                                <img className={classes.folderDropdownIcon}
                                     src={state.folderDropdown ? downIcon : upIcon}
                                     alt={''}/>
                            </Stack>
                            {state.folderDropdown ? <Stack>
                                <Stack className={classes.folderDropdownMain}>
                                    <Stack gap={'20px'}>
                                        {(folderDropdown || []).map((item, index) => (
                                            <Stack className={classes.folderName} key={index} direction={'row'}>
                                                <img src={folderIcon} alt={''}/>
                                                <Stack className={classes.folderItemName}>
                                                    {item?.name}
                                                </Stack>
                                            </Stack>
                                        ))}
                                        <Stack>
                                            <Stack sx={{cursor: 'pointer'}} direction={'row'}
                                                   onClick={() => setState(pre => ({
                                                       ...pre,
                                                       createFolder: !pre?.createFolder
                                                   }))}>
                                                <img src={folder_addIcon} alt={''}/>
                                                <Stack className={classes.itemName}>
                                                    Create New Folder
                                                </Stack>
                                            </Stack>
                                            {state?.createFolder && <Stack className={classes.createFolderModal}>
                                                <CreateNewFolder handleCreate={handleCreateFolder}/>
                                            </Stack>}
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack> : <> </>}
                        </Stack>
                    </Stack>
                </Stack> : <> </>}
            </Stack>
        </>
    )
};
export default EmailDropdown;
