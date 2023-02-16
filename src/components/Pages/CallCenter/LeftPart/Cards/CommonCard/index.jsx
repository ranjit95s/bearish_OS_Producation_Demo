import React from "react";
import {Stack} from "@mui/material";
import classes from "./CallCommonCard.module.css";

const CallCommonCard = (props) => {
    const {icon, title, bgColor, color} = props;
    return (
        <>
            <Stack className={classes.cardMain} sx={{background: bgColor}}>
                <Stack padding={'10px'} gap={'10px'}>
                    <Stack className={classes.cardTitle}>
                        {title}
                    </Stack>
                    <Stack direction={'row'} gap={'10px'}>
                        <Stack className={classes.iconCardMain} sx={{background: color}}>
                            <img src={icon} alt={''}/>
                        </Stack>
                        <Stack className={classes.itemCount}>
                            00
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default CallCommonCard;