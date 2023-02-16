import React, {useEffect, useState} from "react";
import {Stack, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import classes from "./Login.module.css";
import BearishLogo from "../../../Images/Bearish/Bearish 150 x 150.png"
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../redux/action/Auth/action";
import axios from "axios";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


    const [state, setState] = useState({password: '', email: ''});
    const [loginUserData, setLoginUserData] = useState("");

    useEffect(() => {
        axios.get('https://ipapi.co/json/').then((res) => {
            setLoginUserData(pre => res.data);
        });
    }, []);

    /** Handler */
    const onSubmitButtonClickHandler = () => {
        const {city, country_name, timezone, ip} = loginUserData;
        dispatch(login({
            email: state.email,
            password: state.password,
            browser: {
                location: `${city}, ${country_name}`,
                timezone: timezone,
                ipAddress: ip,
            }
        }));
        if (isLoggedIn)
            navigate("/dashboard");
    };

    const handleChange = ({target}) => {
        setState(pre => ({...pre, [target.name]: target.value}))
    };

    return (
        <>
            <Stack>
                <Stack className={classes.bg}>
                    <Stack className={classes.loginModal}>
                        <Stack className={classes.loginBox}>
                            <Stack gap={'29px'} padding={'63px 90px 77px 85px'}>
                                <Stack className={classes.logoAdnTitle}>
                                    <Stack>
                                        <img width={'75px'} src={BearishLogo} alt={''}/>
                                    </Stack>
                                    <Stack className={classes.bearishOSName}>
                                        Bearish OS
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Stack gap={'20px'}>
                                        <TextField placeholder={'Email'} name={'email'} onChange={handleChange}/>
                                        <Stack gap={'10px'}>
                                            <TextField placeholder={'Password'} type={'password'} name={'password'}
                                                       onChange={handleChange}/>
                                            <Stack direction={'row'} justifyContent={'space-between'}>
                                                <Stack className={classes.forgotPassword}>
                                                    Forgot Password
                                                </Stack>
                                                <Stack direction={'row'} gap={'3px'}>
                                                    <Stack fontSize={'13px'}>
                                                        Don’t have an account?
                                                    </Stack>
                                                    <Stack className={classes.signUp}>
                                                        Sign Up Now
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack alignItems={'center'}>
                                    <Stack className={classes.loginBtn} onClick={onSubmitButtonClickHandler}>
                                        Login
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};

export default Login
