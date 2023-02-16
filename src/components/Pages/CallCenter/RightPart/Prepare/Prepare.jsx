import React from "react";
import {Stack} from "@mui/material";
import PrepareTable from "./PrepareTable/PrepareTable";
import classes from "./Prepare.module.css";
import nextIcon from "../../../../../Images/Bearish/chevron_forward.svg"
import backIcon from "../../../../../Images/Bearish/chevron_backward.svg"

const Prepare = () => {

    return (
        <>
            <Stack className={classes.prepareMain}>
                <Stack padding={'20px 20px 9px 20px'}>
                    <Stack className={classes.titleMain}>
                        <Stack className={classes.prepareTitle}>
                            Prepare
                        </Stack>
                        <Stack fontSize={'15px'}>
                            Today’s Contacts
                        </Stack>
                    </Stack>
                    <Stack className={classes.sectionMain}>
                        <Stack>
                            Name
                        </Stack>
                        <Stack>
                            Company
                        </Stack>
                        <Stack direction={'row'} gap={'75px'}>
                            <Stack>
                                Status
                            </Stack>
                            <Stack direction={'row'} gap={'30px'}>
                                <Stack>
                                    Prepare
                                </Stack>
                                <Stack>
                                    Start
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack margin={'20px 0 0 0'}>
                        <PrepareTable/>
                    </Stack>
                    <Stack marginTop={'10px'} width={'100%'}>
                        <Stack className={classes.bottomMain}>
                            <Stack fontSize={'18px'}>
                                000/000
                            </Stack>
                            <img src={backIcon} alt={''}/>
                            <img src={nextIcon} alt={''}/>
                        </Stack>
                    </Stack>

                </Stack>
            </Stack>
        </>
    )
};
export default Prepare;
