const MuiAppBar = {
    styleOverrides: {
        root: ({theme}) =>({
            boxShadow: 'unset',
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: theme.palette.primary.dark,
            position: 'relative',
        }),
    },
};

export default MuiAppBar;
