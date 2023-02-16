import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import classes from "./ApprovalDropDown.module.css"

const userInfo = {
    id: "1",
    name: "Users User Name"
}

const INITIAL_ARRAY = [
    {
        id: '1',
        name: 'First and Last Name',
    },
    {
        id: '2',
        name: 'First and Last Name',
    },
    {
        id: '3',
        name: 'First and Last Name',
    },
    {
        id: '4',
        name: 'First and Last Name',
    }
];

const ApprovalDropDown = () => {

    const [ShowOption, setShowOption] = useState(false);

    const searchUserName = (name) => {
        const userName = name.split(" ");
        return userName?.[0].charAt(0).toLocaleUpperCase() + "" + userName?.[1].charAt(0).toLocaleUpperCase()
    };


    return (
        <Box className={classes.mainContainer} >
            <Box>
                <Box className={classes.userNameContainer} >
                    <Stack>
                        <Stack className={classes.searchUserIcon}>
                            {searchUserName(userInfo.name)}
                        </Stack>
                    </Stack>
                    <Typography className={classes.userName} >Users User Name</Typography>
                </Box>
                <Typography className={classes.ReqTypography} >Requesting Approval From</Typography>
                <Box className={classes.userNameContainer} >
                    <Stack>
                        <Stack className={classes.searchUserIcon}>
                            {searchUserName(userInfo.name)}
                        </Stack>
                    </Stack>
                    <Typography className={classes.userName} >Users User Name</Typography>
                </Box>
                {
                    ShowOption &&
                    <Box>
                        <Stack className={classes.darkLink} />
                        <Box>
                            <Stack sx={{ height: '100%', overflowY: 'scroll', gap: '5px' }}>
                                {(INITIAL_ARRAY || []).map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Stack>
                                            <Stack key={index} direction={'row'} gap={'4px'} className={classes.dropDownContainer} >
                                                <Stack className={classes.searchUserIcon}>
                                                    {searchUserName(item.name)}
                                                </Stack>
                                                <Stack className={classes.rightSideContainer} >
                                                    <Stack className={classes.searchUserName}>
                                                        {item.name}
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </React.Fragment>
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                }
                <Stack className={classes.requestbtn}>
                    <Typography className={classes.reqBtnTypo} onClick={() => setShowOption(!ShowOption)} >Request Now</Typography>
                </Stack>
            </Box>
        </Box>
    )
}

export default ApprovalDropDown
