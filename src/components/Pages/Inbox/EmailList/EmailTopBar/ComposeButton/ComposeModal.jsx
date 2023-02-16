import React, {useState} from "react";
import {Stack} from "@mui/material";
import classes from "./ComposeModal.module.css";
import editIcon from "../../../../../../Images/Bearish/edit.svg"
import EmailDropdown from "../../../../../Common/EmailDropdown/EmailDropdown";
import ConnectAccount from "../../../../../Common/ConnectAccountButton/ConnectAccount";
import {useSelector} from "react-redux";

const ComposeModal = (props) => {
    const {setState} = props;
    const userLoginMailLIst = useSelector(store => store?.emailCenter?.loggedEmail);
    const [mailsList, setMailsList] = useState(userLoginMailLIst?.data);

    const handleComposeClick = () => {
        setState(pre => ({...pre, composeEmail: true, modal: false}))
    };

    const handleClickConnectAccount = () => {
        setState(pre => ({...pre, connectAccount: !pre?.connectAccount, modal: false}))
    };

    return (
        <>
            <Stack className={classes.composeModalMain}>
                <Stack padding={'20px 5px 20px 10px'}>
                    <Stack className={classes.composeButton}
                           onClick={handleComposeClick}>
                        <Stack padding={'0 10px 0 10px'}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <img src={editIcon} alt={''}/>
                                <Stack fontSize={'18px'}>
                                    Compose
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack className={classes.whiteLine}/>
                    {(mailsList || []).map((value, index) => (
                        <Stack key={index} marginTop={'15px'}>
                            <EmailDropdown {...value}/>
                        </Stack>
                    ))}
                </Stack>
                <Stack onClick={handleClickConnectAccount}>
                    <ConnectAccount name={'Connect an Account'}/>
                </Stack>
            </Stack>
        </>
    )
};
export default ComposeModal;
