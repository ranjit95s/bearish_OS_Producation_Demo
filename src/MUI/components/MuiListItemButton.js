const MuiListItemButton = {
    styleOverrides: {
        root: ({theme}) => ({
            borderRadius: '6px',
            color: theme.palette.secondary.dark,
            transition: theme.transitions.create(['background-color', 'box-shadow', 'color'], {
                duration: theme.transitions.duration.enteringScreen,
            }),
            '&.Mui-selected ': {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.light,
                boxShadow: theme.shadows[1],
                "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                }
            },
            '&:hover': {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.light,
            }
        })
    }
};

export default MuiListItemButton;
