import {createTheme} from "@mui/material";

import components from "./components";
import typography from "./typography";

const theme = createTheme({
    palette: {
        primary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
        },
        secondary: {
            light: 'rgba(232,232,232,0.6)',
            main: '#e8e8e8',
            dark: '#344054',
        },
        text: {
            primary: '#344054',
            secondary: '#344054',
        },
    },
    components,
    typography,
});

export default theme;
