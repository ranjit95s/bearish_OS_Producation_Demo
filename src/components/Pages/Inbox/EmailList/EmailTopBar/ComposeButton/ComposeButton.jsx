import React, {useState} from "react";
import {Modal, Stack} from "@mui/material";
import classes from "./ComposeButton.module.css";
import ComposeModal from "./ComposeModal";
import editIcon from "../../../../../../Images/Bearish/edit.svg";
import ComposeEmail from "../../../ComposeEmail/ComposeEmail";
import {AlphaAccess} from "../../../EmailCenterComponents/AlphaAccess";
import {FirstConnect} from "../../../EmailCenterComponents/FirstConnect";
import {TicklingtheBackendGmail} from "../../../EmailCenterComponents/TicklingGmail";

const ComposeButton = () => {

    const [state, setState] = useState({modal: false});

    const handleCloseComposeEmail = () => setState(pre => ({...pre, composeEmail: false}));

    const handleAlphaAccessCode = (target) => {
        if (target.value === 'JackieOS') {
            setState(pre => ({...pre, alphaAccess: false, ticklingTheBackend: true}))
        }
    };

    const handleCloseAlphaModal = () => {
        setState(pre => ({...pre, alphaAccess: false}))
    };

    const handleCloseFirstConnectModal = () => {
        setState(pre => ({...pre, modal: false, connectAccount: !pre?.connectAccount}))
    };

    const handleCloseAlphaAccess = () => {
        setState(pre => ({...pre, connectAccount: false, alphaAccess: !pre?.alphaAccess}))
    };

    const handleCloseTicklingTheBackendModal = () => {
        setState(pre => ({...pre, ticklingTheBackend: false}));
    };

    return (
        <>
            <Stack>
                {!state.modal ?
                    <Stack className={classes.composeButton} onClick={() => setState(pre => ({...pre, modal: true}))}>
                        <Stack width={'19.04px'} height={'19.04px'}>
                            <img width={'100%'} height={'100%'} alt={''} src={editIcon}/>
                        </Stack>
                    </Stack> : <ComposeModal setState={setState}/>}

                {state?.composeEmail ? <Stack className={classes.bottomSubjectEmail}>
                    <ComposeEmail handleClose={handleCloseComposeEmail}/>
                </Stack> : <> </>}

                <Modal className={classes.modal} open={state?.connectAccount || false}>
                    <FirstConnect handleClose={handleCloseFirstConnectModal}
                                  handleCloseAlphaAccess={handleCloseAlphaAccess}/>
                </Modal>

                <Modal className={classes.modal} open={state?.alphaAccess || false}>
                    <AlphaAccess handleAlphaAccessCode={handleAlphaAccessCode}
                                 handleClose={handleCloseAlphaModal}/>
                </Modal>

                <Modal className={classes.modal} open={state?.ticklingTheBackend || false}>
                    <TicklingtheBackendGmail handleClose={handleCloseTicklingTheBackendModal}/>
                </Modal>
            </Stack>
        </>
    )
};
export default ComposeButton;
