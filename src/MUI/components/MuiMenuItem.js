const MuiMenuItem = {
    styleOverrides: {
        root: ({theme}) => ({
            padding: `3px 12px`,
            gap: '12px',
            transitions: theme.transitions.create(['background-color', 'color'], {
                duration: theme.transitions.duration.enteringScreen,
            }),
            '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.light,
            }
        })
    }
};

export default MuiMenuItem;
