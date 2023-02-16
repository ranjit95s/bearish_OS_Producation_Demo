import { Box, Button, Divider, IconButton, Tooltip, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import classes from "./FileDocument.module.css"
import close from "../../../../../../Images/Bearish/Close.svg"
import cheack from "../../../../../../Images/Bearish/check.svg"
import person from "../../../../../../Images/Bearish/person.svg"
import info from "../../../../../../Images/Bearish/info.svg"
import add_circled from "../../../../../../Images/Bearish/add_circled.svg"
import deleteicon from "../../../../../../Images/Bearish/trash_Red.svg"

const informationData = [
    {
        icon: cheack,
        name: 'Name of Document',
        date: '00/00/0000',
        time: '00:00 AM',
    },
    {
        icon: cheack,
        name: 'Name of Viewer',
        date: '00/00/0000',
        time: '00:00 AM',
    },
    {
        icon: person,
        name: 'Shared with [Name of User]',
        date: '00/00/0000',
        time: '00:00 AM',
    },
]

const createLink = [
    {
        id: 1,
        linkName: '',
    }
]

const FileDocument = () => {

    const [createLinkText, setCreateLinkText] = useState(createLink);

    const handelCreateLink = () => {
        let lastElement = createLinkText[createLinkText.length - 1];
        const INITIAL_SATTE = {
            id: lastElement.id + 1,
            linkName: "",
        }
        setCreateLinkText(() => [...createLinkText, INITIAL_SATTE])
    }

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.subContainer}>
                <Stack className={classes.profile}></Stack>
                <Stack className={classes.documentname}>
                    <Typography className={classes.documenttext} >Document Name</Typography>
                </Stack>
                <Button className={classes.buttonImg}><img src={close} alt="close" /></Button>
            </Box>
            <Box>
                <Stack className={classes.creatorname}>
                    <Typography className={classes.creatortext} >Created By: Name of Document Creator</Typography>
                </Stack>
            </Box>
            <Box>
                <Stack>
                    <Typography className={classes.analutictext}>Basic Analytics</Typography>
                </Stack>
            </Box>
            <Box className={classes.boxbottom}>
                {informationData.map((item) => (
                    <Stack className={classes.boxflex}>
                        <Stack className={classes.subboxflex}>
                            <Stack>
                                <Button className={classes.iconbutton}><img src={item.icon} alt="" /></Button>
                            </Stack>
                            <Stack>
                                <Typography className={classes.textFont}>{item.name}</Typography>
                            </Stack>
                        </Stack>
                        <Stack className={classes.subboxflex}>
                            <Stack>
                                <Typography className={classes.datetext}>{item.date}</Typography>
                            </Stack>
                            <Stack>
                                <Typography className={classes.timetext}>{item.time}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                ))}
            </Box>
            <Divider />
            <Box>
                <Stack className={classes.bottomBtnFlex} >
                    <Stack className={classes.advanceflex}>
                        <Typography className={classes.advancedtext}>Advanced Analytics</Typography>
                        <Tooltip title="Add" arrow placement="top-start">
                            <IconButton>
                                <img src={info} alt="" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack className={classes.advanceflex}>
                        <Button onClick={() => handelCreateLink()}>
                            <img src={add_circled} alt="" className={classes.addIcon} />
                            <Typography className={classes.createText}>Create Link</Typography>
                        </Button>
                    </Stack>
                </Stack>
            </Box>
            <Box>
                <Stack><Typography className={classes.linktext}>All Links</Typography></Stack>
                <Box className={classes.boxscroll}>
                    {createLinkText.map((item, i) => (
                        <Stack className={classes.inputmain}>
                            <input type="text" name='linkName' className={classes.inputtext} placeholder={'Link Name'}/>
                            <Stack className={classes.buttonflex}>
                                <Button className={classes.viewbutton}><Typography>View</Typography></Button>
                                <Button className={classes.deletbutton}>
                                    <Stack className={classes.deleteBox}>
                                        <img src={deleteicon} alt="" />
                                        <Typography>Delete</Typography>
                                    </Stack>
                                </Button>
                            </Stack>
                        </Stack>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default FileDocument;
