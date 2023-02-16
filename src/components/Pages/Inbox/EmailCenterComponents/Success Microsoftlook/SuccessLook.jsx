import * as React from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../../../../Images/Bearish/Close.svg";
import sem from "../../../../../Images/Bearish/sol.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./Success.module.css";

const SuccessLook = ({handleClose}) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="SuccessGmail" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Success
                            </Typography>
                            <ImageListItem id="SuccessGmail">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="SuccessGmail"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} onClick={handleClose} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                            <Button className={classes.signIn}>
                                <img src={sem} alt="email" />
                                <Typography variant="h1" className={classes.signOption}>
                                    Microsoft Outlook
                                </Typography>
                            </Button>
                            <Typography className={classes.info}>
                                Your intelligent connection to Microsoft Outlook was a success.
                            </Typography>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
};

export default SuccessLook;
