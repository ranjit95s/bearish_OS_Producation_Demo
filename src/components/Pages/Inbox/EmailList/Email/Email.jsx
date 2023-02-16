import React, {useState} from "react";
import {Stack, Modal} from "@mui/material";
import {useLocation, useNavigate} from "react-router";
import {useSelector} from "react-redux";
import ComposeButton from "../EmailTopBar/ComposeButton/ComposeButton";
import EmailTopBar from "../EmailTopBar/EmailTopBar";
import EmailList from "../EmailList";
import EmailPreview from "../../EmailPreview/EmailPreview";
import {SuccessGmail} from "../../EmailCenterComponents/Success Gmail";

const Email = () => {
    const search = useLocation().search;
    const navigate = useNavigate();

    const previewMailInfo = useSelector(store => store.emailCenter?.hoverEmail);

    const successAuthGmail = new URLSearchParams(search).get("success");

    /** State */

    const [state, setState] = useState({successModal: successAuthGmail});

    /** Handler*/

    const handleCloseSuccessGmailModal = () => {
        setState(pre => ({...pre, successModal: false}))
        navigate("/email-center")
    };

    return (
        <>
            {!state.successModal && <Stack fontFamily={'Source Serif Pro'} direction={'row'} gap={1} flex={1}>
                <ComposeButton/>
                <Stack gap={'5px'}>
                    <EmailTopBar/>
                    <EmailList/>
                </Stack>
                <Stack width={'300px'}>
                    {Object.keys(previewMailInfo || {}).length > 0 ? <EmailPreview/> : <> </>}
                </Stack>
            </Stack>}
            <Modal open={state.successModal}>
                <SuccessGmail handleClose={handleCloseSuccessGmailModal}/>
            </Modal>
        </>
    )
};
export default Email;
