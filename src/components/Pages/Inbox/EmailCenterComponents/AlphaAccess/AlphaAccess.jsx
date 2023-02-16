import * as React from "react";
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
import {Tooltip as ReactTooltip} from "react-tooltip";
import classes from "./AlphaAccess.module.css";

const AlphaAccess = ({handleAlphaAccessCode, handleClose}) => {

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="AlphaAccess" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Alpha Access
                            </Typography>
                            <ImageListItem id="AlphaAccess">
                                <ReactTooltip
                                    anchorId="AlphaAccess"
                                    className={classes.tooltip}
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt={""} loading="lazy" onClick={handleClose}/>
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                            <Button className={classes.signIn}>
                                <img src={sem} alt={""}/>
                                <Typography variant="h1" className={classes.signOption}>
                                    Google Gmail
                                </Typography>
                            </Button>
                            <Typography className={classes.info}>
                                Our Intelligent Connection connecting Google Gmail and Bearish
                                OS is currently in Alpha Access only. If you think you should
                                have access contact, your admin. You will be automatically
                                redirected if your alpha access code is correct.
                            </Typography>
                            <CardContent className={classes.inputStyle}>
                                <input
                                    type="text"
                                    placeholder="Enter Alpha Access Code"
                                    name="code"
                                    id="code"
                                    onChange={({target}) => handleAlphaAccessCode(target)}
                                />
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
};

export default AlphaAccess;
