import React, {useState} from "react";
import {Stack} from "@mui/material";
import NoOutlineInput from "../../../Common/NoOutlineInput/Inedx";
import SendModal from "./SendModal/SendModal";
import downIcon from "../../../../Images/Bearish/chevron_down.svg";
import upIcon from "../../../../Images/Bearish/chevron_up.svg";
import attachmentIcon from "../../../../Images/Bearish/attachment.svg";
import deleteIcon from "../../../../Images/Bearish/trash.svg";
import linkIcon from "../../../../Images/Bearish/link.svg";
import minimiseIcon from "../../../../Images/Bearish/remove.svg";
import closeIcon from "../../../../Images/Bearish/Close-red.svg";
import vectorIcon from "../../../../Images/Bearish/vector.svg";
import classes from "./BottomComposeEmailModal.module.css";

const BottomComposeEmailModal = (props) => {
    const {handleClose, handleMinimise} = props;
    const [state, setState] = useState();
    return (
        <>
            <Stack className={classes.subjectEmailMain}>
                <Stack className={classes.subjectTop}>
                    <img src={vectorIcon} alt={''}/>
                    <Stack direction={'row'} gap={'20px'}>
                        <img style={{cursor: 'pointer'}} src={minimiseIcon} alt={''} onClick={handleMinimise}/>
                        <img style={{cursor: 'pointer'}} onClick={handleClose} src={closeIcon} alt={''}/>
                    </Stack>
                </Stack>
                <Stack height={'100%'} justifyContent={'space-between'}>
                    <Stack padding={'10px 10px 10px 15px'} gap={'10px'}>
                        <Stack>
                            <input
                                placeholder={'From'}
                                className={classes.noOutLine}
                                type={'text'}
                                value={state?.from || ''}
                                onChange={(target) => setState(pre => ({...pre, from: target.value}))}/>
                        </Stack>
                        <Stack>
                            <input
                                placeholder={'To'}
                                className={classes.noOutLine}
                                type={'text'}
                                value={state?.to || ''}
                                onChange={(target) => setState(pre => ({...pre, to: target.value}))}/>
                            <Stack className={classes.darkLine}/>
                        </Stack>
                        <Stack>
                            <Stack direction={'row'}>
                                <input
                                    placeholder={''}
                                    className={classes.noOutLine}
                                    type={'text'}
                                    value={state?.cc || ''}
                                    onChange={(target) => setState(pre => ({...pre, cc: target.value}))}/>
                                <Stack className={classes.ccAndBcc}>
                                    CC
                                </Stack>
                            </Stack>
                            <Stack className={classes.darkLine}/>
                        </Stack>
                        <Stack>
                            <Stack direction={'row'}>
                                <input
                                    placeholder={''}
                                    className={classes.noOutLine}
                                    type={'text'}
                                    value={state?.bcc || ''}
                                    onChange={(target) => setState(pre => ({...pre, bcc: target.value}))}/>
                                <Stack className={classes.ccAndBcc}>
                                    BCC
                                </Stack>
                            </Stack>
                            <Stack className={classes.darkLine}/>
                        </Stack>
                        <Stack>
                            <input
                                placeholder={'Subject'}
                                className={classes.noOutLine}
                                type={'text'}
                                value={state?.subject || ''}
                                onChange={({target}) => setState(pre => ({...pre, subject: target.value}))}/>
                            <Stack className={classes.darkLine}/>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Stack className={classes.bottomMenu}>
                            <img src={linkIcon} alt={''}/>
                            <img src={attachmentIcon} alt={''}/>
                            <img src={deleteIcon} alt={''}/>
                            <Stack className={classes.sendMain}>
                                <Stack className={classes.selectView}>
                                    <Stack className={classes.selectTab}
                                           onClick={(e) => setState(pre => ({...pre, dropdown: !pre?.dropdown}))}>
                                        <Stack className={classes.selectName}>
                                            Send
                                        </Stack>
                                        <img src={state?.dropdown ? upIcon : downIcon} alt={''}/>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        {state?.dropdown ? <Stack className={classes.sendModal}>
                            <SendModal handleClose={() => setState(pre => ({...pre, dropdown: false}))}/>
                        </Stack> : <> </>}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default BottomComposeEmailModal;
