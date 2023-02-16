const MuiTextField = {
    styleOverrides: {
        root: () => ({
            '.MuiOutlinedInput-root': {
                border: '2px solid #FFFFFF',
                outline: 'none',
                borderRadius: '5px',
                fontSize: '18px',
                fontFamily: 'Source Serif Pro, Semibold',
                fontWeight: 'bold',
                color: '#000',
                borderColor: "#FFFFFF",
                height: '50px'
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff"
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'white',
                },
                '&:hover fieldset': {
                    borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'none',
                },
            },
        }),
    }
};

export default MuiTextField;
