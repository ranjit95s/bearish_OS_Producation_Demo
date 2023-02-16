import { Box, IconButton, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import classes from "./WorkSpacePreview.module.css"
import DownArrow from "../../../../Images/Bearish/chevron_down.svg"
import up_icon from "../../../../Images/Bearish/chevron_up.svg"
import PreviewTabs from './PreviewTabs/PreviewTabs';
import arcive from "../../../../Images/Bearish/Light_archive.svg"
import person from "../../../../Images/Bearish/person.svg"
import List from './WorkSpaceTableList/List';
import ChackList from './WorkSpaceTableList/ChackList';
import Boards from './WorkSpaceTableList/Boards';
import WhiteBoard from './WorkSpaceTableList/WhiteBoard';
import Docs_Wiki from './WorkSpaceTableList/Docs_Wiki';
import Notes from './WorkSpaceTableList/Notes';
import Tabs from "@mui/material/Tabs"
import checkbox_unchecked from "../../../../Images/Bearish/checkbox_unchecked.svg"
import checkbox_checked from "../../../../Images/Bearish/checked-checkbox.svg"


const WorkSpacePreview = () => {
    const [openAccodian, setOpenAccodian] = useState(true);
    const [selectedTab, setSelectedTab] = useState("lists");
    const [checkedbtn, setCheckedbtn] = useState(false)
    const handleAccodian = () => { setOpenAccodian(!openAccodian) };
    return (
        <Box>
            <TableContainer component={Paper} className={classes.tbaleParent}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableHeadCell}>
                                <img src={checkedbtn ? checkbox_checked : checkbox_unchecked} alt="" className={classes.Checkbox} onClick={() => setCheckedbtn(!checkedbtn)} />
                            </TableCell>
                            <TableCell className={classes.tableHeadCell}>
                                <PreviewTabs setSelectedTab={setSelectedTab} />
                            </TableCell>
                            <TableCell align="right" className={classes.tableHeadCell}>
                                <img src={person} className={classes.headIcon} />
                                Share Now
                            </TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>
                                <img src={arcive} className={classes.headIcon} />
                                Totle Item
                            </TableCell>
                            <TableCell align="right" className={classes.tableHeadCell}>
                                <IconButton onClick={handleAccodian}>
                                    <img src={openAccodian ? DownArrow : up_icon} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    {selectedTab === "lists" && <List openAccodian={openAccodian} />}
                    {selectedTab === "checklists" && <ChackList openAccodian={openAccodian} />}
                    {selectedTab === "boards" && <Boards openAccodian={openAccodian} />}
                    {selectedTab === "whiteboards" && <WhiteBoard openAccodian={openAccodian} />}
                    {selectedTab === "docs&Wikis" && <Docs_Wiki openAccodian={openAccodian} />}
                    {selectedTab === "notes" && <Notes openAccodian={openAccodian} />}
                    <Tabs></Tabs>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default WorkSpacePreview
