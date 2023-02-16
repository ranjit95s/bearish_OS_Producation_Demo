import React from "react";
import {BrowserRouter} from "react-router-dom";
import {StyledEngineProvider, ThemeProvider} from "@mui/material";
import {Toaster} from "react-hot-toast";

import Router from "./Router";
import theme from "./MUI/theme";

const App = () => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst={true}>
                    <Toaster position={'top-center'}/>
                    <BrowserRouter>
                        <Router/>
                    </BrowserRouter>
                </StyledEngineProvider>
            </ThemeProvider>
        </>
    );
};

export default App;
