import React from "react";
import {Outlet} from "react-router-dom";
import {Container, Stack} from "@mui/material";
import {Header} from "./index";
import {Supercharge} from "../../../Common";

const DefaultContainer = ({children}) => {
    return (
        <>

            <Stack component={`main`} sx={{height: `100%`, width: `100%`, overflowY: `auto`, backgroundColor: '#f2f5f8'}}>
                <Header/>

                <Container maxWidth={false} sx={{flex: `auto`, display: `flex`, padding: '13px 10px 13px 10px !important'}}>

                    <Outlet/>
                    <Supercharge />
                    {children}
                </Container>
            </Stack>
        </>
    )
};

export default DefaultContainer;
