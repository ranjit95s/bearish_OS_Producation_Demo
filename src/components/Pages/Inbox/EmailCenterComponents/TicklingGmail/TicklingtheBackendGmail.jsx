import * as React from "react";
import {useEffect} from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../../../../Images/Bearish/Close.svg";
import sem from "../../../../../Images/Bearish/sem.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {StyledEngineProvider} from "@mui/material/styles";
import classes from "./TicklingGmail.module.css";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {googleMailAuth} from "../../../../../redux/action/EmailCenter/action";
import {useDispatch} from "react-redux";

const TicklingtheBackendGmail = ({handleClose}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const ticklingTheBackend = setInterval(() => {
            handleClose();
            dispatch(googleMailAuth({identifier: 'NewSignupUser'}));
        }, 2000);

        return () => {
            clearInterval(ticklingTheBackend);
        };
    }, []);

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="TicklingtheBackendGmail" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Tickling the Backend
                            </Typography>
                            <ImageListItem id="TicklingtheBackendGmail">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="TicklingtheBackendGmail"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy"/>
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                            <Button className={classes.signIn}>
                                <img src={sem} alt="email"/>
                                <Typography variant="h1" className={classes.signOption}>
                                    Google Gmail
                                </Typography>
                            </Button>
                            <Typography className={classes.info}>
                                This page should automatically redirect for you to login to
                                Google Gmail.
                            </Typography>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
};

export default TicklingtheBackendGmail;
