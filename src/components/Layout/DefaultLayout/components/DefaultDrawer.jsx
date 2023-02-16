import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import classes from "./DefaultDrawer.module.css"
import forWardArrow from "../../../../Images/Bearish/chevron_forward.svg"
import upArrow from "../../../../Images/Bearish/chevron_up.svg"
import DrawerInput from "./DrawerSubMenu/DrawerInput";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Drawer,
    List,
    ListItem, ListItemButton,
    Popover,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import settingIcon from "../../../../Images/Bearish/settings.svg";
import { useDispatch, useSelector } from "react-redux";
import CreateWorkSpace from "./DrawerSubMenu/CreateWorkSpace";
import { useNavigate, useLocation } from "react-router-dom";
import { ExpandMore } from '@mui/icons-material';
import DrawerOptions from "./DrawerSubMenu/DrawerOptions";
import { switchDrawerMode } from "../../../../redux/action/Layout/action";
const commonTransition = (property = '') => ({
    transitionProperty: `${property} !important`,
    transitionDuration: "225ms !important",
    transitionDelay: `0ms !important`,
});

const DefaultDrawer = ({ routeList }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const drawer = useSelector(state => state.layout.drawer);
    const [drawOptions, setDrawOptions] = useState();
    const [openAccodian, setOpenAccodian] = useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [routesList, setRoutesList] = useState();
    const colorArray = [
        'rgba(255, 255, 255, 0.3)',
        'rgba(255, 255, 255, 0.3)',
        'rgba(94, 226, 160, 0.3)',
        'rgba(255, 0, 0, 0.3)',
        'rgba(0, 8, 198, 0.3)',
        'rgba(94, 226, 160, 0.3)',
        'rgba(94, 226, 160, 0.3)',
        'rgba(181, 0, 91, 0.3)',
        'rgba(119, 94, 226, 0.3)',
        'rgba(0, 118, 123, 0.3)',
        'rgba(94, 226, 160, 0.3)'
    ];
    const theme = useTheme();
    const isGreaterThanSmallBreakpoint = useMediaQuery(
        theme.breakpoints.up("sm")
    );
    const onListItemClickHandler = (route) => navigate(route);
    const handleListClick = (event, options, i) => {
        setOpenAccodian(i);
        setDrawOptions(options);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleRoutClick = (event) => {
        if (event.currentTarget.innerText === 'Create a Workspace') {
            setAnchorEl(event.currentTarget);
            setDrawOptions(null)
        }
    };
    const HoverColor = () => {
        routeList.map((ele, i) => {
            return ele.color = colorArray[i];
        });
        setRoutesList(routeList);
    };

    useEffect(() => {
        HoverColor()
    }, [routesList]);


    const changeDrawerMode = (name) => {
        if (!drawer.isOpen && (name === "Bearish OS" || name === "Search Bearish OS")) {
            dispatch(switchDrawerMode())
        }
    }

    return (
        <>
            <Drawer
                variant={isGreaterThanSmallBreakpoint || drawer.isNarrow ? "persistent" : "temporary"}
                open={drawer.isOpen} anchor={"left"}
                sx={{
                    width: (theme) => drawer.isOpen ? drawer.isNarrow ? `calc(${theme.spacing(8.2)})` : `300px` : `55px`,
                    ...(commonTransition(`width`)),
                    "& .MuiDrawer-paper": {
                        ...(commonTransition(`width`)),
                        width: (theme) => drawer.isOpen ? drawer.isNarrow ? `calc(${theme.spacing(8.2)})` : `300px` : `55px`,
                        overflowX: `hidden`,
                        position: `relative`,
                        visibility: `visible !important`,
                        transform: `translateX(0px) !important`,
                    },
                }}
            >
                <Box className={classes.drawer_container}>
                    <Stack justifyContent={'space-between'} height={'100%'}>
                        <List disablePadding sx={{ gap: 1 }} className={classes.accodian_list}>
                            {
                                routeList?.filter(({ visibleOn }) => visibleOn.includes('drawer'))?.map(
                                    ({ name, icon, path = '/', subRout, color }, i) =>
                                        <React.Fragment key={i}>
                                            {name === "Workspaces" ? <Divider /> : name === "Calendar" && <Divider />}
                                            <Accordion disableGutters square elevation={0}
                                                onClick={() => onListItemClickHandler(path)}
                                                selected={location.pathname.includes(path)}
                                                sx={{ flex: name === "Create a Workspace" ? "1" : "0", '&:before': { display: 'none', } }}
                                                key={i} className={classes.main_accodian}>
                                                <AccordionSummary
                                                    expandIcon={drawer.isOpen && subRout ? <ExpandMore /> : ""}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    sx={{
                                                        padding: "0",
                                                        '&:hover': {
                                                            backgroundColor: color
                                                        },
                                                        '&:focus': {
                                                            backgroundColor: color
                                                        }
                                                    }}
                                                    className={classes.accodian_summary}
                                                >
                                                    {
                                                        name === "Search Bearish OS" ?
                                                            <DrawerInput placeholder={"Search Bearish OS"} /> :
                                                            <ListItem sx={{ padding: 0, }} onClick={(e) => handleRoutClick(e)}>
                                                                <Stack
                                                                    sx={{
                                                                        my: 0.3,
                                                                    }} className={classes.drawerButton}>
                                                                    <Stack direction={'row'} gap={'15px'}>
                                                                        <img className={classes.drawerIcon} src={icon} alt={name} />
                                                                        <Typography className={classes.drawerListText}>{name}</Typography>
                                                                    </Stack>
                                                                </Stack>
                                                            </ListItem>
                                                    }
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.subRout_accodianDetails}>
                                                    {
                                                        subRout?.filter(({ visibleOn }) => visibleOn.includes('drawer'))?.map(
                                                            ({ name, icon, path = '/', options }, i) =>
                                                                <ListItem
                                                                    key={i}
                                                                    onClick={(e) => handleListClick(e, options, i)}
                                                                    aria-describedby={id}
                                                                    className={classes.subRout_listItem}
                                                                    sx={{
                                                                        '&:hover': {
                                                                            borderRadius: '5px',
                                                                            backgroundColor: color
                                                                        },
                                                                        '&:focus': {
                                                                            borderRadius: '5px',
                                                                            backgroundColor: color
                                                                        }
                                                                    }}
                                                                >
                                                                    <ListItemButton onClick={() => onListItemClickHandler(path)}
                                                                        selected={location.pathname.includes(path)} sx={{
                                                                            padding: 0,
                                                                            my: 0,
                                                                        }}
                                                                        className={classes.subDrawerButton}
                                                                    >
                                                                        <Stack direction={'row'} gap={'15px'}>
                                                                            <img className={classes.drawerIcon} src={icon} alt={name} />
                                                                            <Typography className={classes.drawerListText}>{name}</Typography>
                                                                        </Stack>
                                                                        {drawer.isOpen && <img src={openAccodian === i && open ? forWardArrow : upArrow} alt="arrow" />}
                                                                    </ListItemButton>
                                                                </ListItem>
                                                        )
                                                    }
                                                </AccordionDetails>
                                            </Accordion>
                                        </React.Fragment>
                                )
                            }
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: !drawer.isOpen ? 50 : 280,
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                menuStyle={{ boxShadow: 'none' }}
                                PaperProps={{
                                    style: { width: '300px', marginLeft: '20px', border: "2px solid white" },
                                }}
                            >
                                {drawOptions ? <DrawerOptions options={drawOptions} /> : <CreateWorkSpace />}

                            </Popover>
                        </List>
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} className={drawer.isOpen ? classes.drawer_bottom_open : classes.drawer_bottom_close}>
                            <Stack className={classes.userBtn}>
                                TU
                            </Stack>
                            <Stack direction={'row'} gap={'10px'} sx={{ display: !drawer.isOpen && "none" }}>
                                <Stack className={classes.upgradeBtn}>
                                    Upgrade
                                </Stack>
                                <img src={settingIcon} alt="setting" />
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Drawer>
        </>
    )
};

export default DefaultDrawer;
