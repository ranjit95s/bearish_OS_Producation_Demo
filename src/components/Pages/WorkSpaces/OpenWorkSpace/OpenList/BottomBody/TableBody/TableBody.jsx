import { Box } from '@mui/system'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const TableBody = ({ tableColData, tableRowData }) => {

    return (
        <Box>
            <div style={{ height: 300, width: '100%', }}>
                <DataGrid
                    hideFooter
                    disableColumnFilter
                    disableColumnMenu
                    showCellRightBorder
                    rowHeight={100}
                    rows={tableRowData}
                    columns={tableColData}
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </div>
        </Box>
    )
}
export default TableBody
