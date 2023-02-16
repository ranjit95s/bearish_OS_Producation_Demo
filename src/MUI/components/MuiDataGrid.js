const MuiDataGrid = {
    styleOverrides: {
        root: () => ({
            boxShadow: 2,
            justifyContent: "center",
            border: 2,
            height: "400px",
            '& .super-app-theme--header': {
                backgroundColor: '#E9EDF2',
                height: "30px !important",
                marginTop: "18px"
            },
            '&.MuiDataGrid-columnHeaders': {
                backgroundColor: 'white',
                minHeight: '30px !important',
                
            },
            '.MuiDataGrid-cell': {
                backgroundColor: 'white',
            },
            '& .MuiDataGrid-cell:hover': {
                color: 'black',
                outline: "rgb(25, 118, 210) solid 1px",
            },
            '& .MuiDataGrid-cell:focus': {
                outline: "rgb(25, 118, 210) solid 1px",
            },
            '& MuiDataGrid-cell--withRenderer': {
                justifyContent: "center",
            },
        }),
    }
}
export default MuiDataGrid