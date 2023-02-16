import React, {useState} from "react";
import {Stack} from "@mui/material";
import BottomComposeEmailModal from "./BottomComposeEmailModal";
import classes from "./ComposeEmail.module.css";
import closeIcon from "../../../../Images/Bearish/Close-red.svg"
import minimiseIconIcon from "../../../../Images/Bearish/remove.svg"

const ComposeEmail = ({handleClose}) => {
    const [isOpen, setIsOpen] = useState({modal: true, minimise: false});
    const handleCloseModal = () => {
        handleClose();
        setIsOpen(pre => ({...pre, modal: false, minimise: false}))
    };
    const handleMinimise = () => {
        setIsOpen(pre => ({...pre, modal: false, minimise: true}))
    };

    return (
        <>
            {isOpen.minimise ? <Stack className={classes.subjectMain}>
                <Stack className={classes.subjectEmail}>
                    <Stack fontSize={'15px'}>
                        Subject
                    </Stack>
                    <Stack direction={'row'} gap={'20px'}>
                        <img src={minimiseIconIcon} alt={''}
                             onClick={() => setIsOpen(pre => ({...pre, modal: true, minimise: false }))}/>
                        <img src={closeIcon} alt={''} onClick={() => {
                            handleClose();
                            setIsOpen(pre => ({...pre, minimise: false}))
                        }}/>
                    </Stack>
                </Stack>
            </Stack> : <> </>}
            {isOpen.modal ?
                <BottomComposeEmailModal handleMinimise={handleMinimise} handleClose={handleCloseModal}/> : <> </>}
        </>
    )
};


export default ComposeEmail;
