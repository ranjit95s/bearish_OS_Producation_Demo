const MuiButton = {
    styleOverrides: {
        root: () => ({
            textTransform: 'unset',
            fontWeight: 600,
            '&.MuiButton-text': {
                width: 'fit-content',
            },
        }),
    }
};

export default MuiButton;
