import React, {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getToken} from "../../../../redux/action/EmailCenter/action";

const AuthCode = () => {
    const dispatch = useDispatch();

    const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    const [code] = useState(query.get("code"));

    useEffect(() => {
        (() => {
            dispatch(getToken({code}))
        })();
    }, []);

    return (
        <Stack className="">Please wait... Authenticating code ...</Stack>
    );
};
export default AuthCode;
