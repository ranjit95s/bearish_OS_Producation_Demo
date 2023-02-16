import React, {useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    ListItem,
    ListItemButton, Popover,
    Stack,
    List,
    Typography
} from "@mui/material";
import classes from "./Workspace.module.css";
import upIcon from "../../../../../../../Images/Bearish/chevron_up.svg"
import WorkSpaceIcon from "../../../../../../../Images/Bearish/Light WorkSpace.svg"
import check_circledIcon from "../../../../../../../Images/Bearish/check_circled.svg"
import forWardArrow from "../../../../../../../Images/Bearish/chevron_forward.svg"
import boards from "../../../../../../../Images/Bearish/Light boards.svg";
import listIcon from "../../../../../../../Images/Bearish/Light list.svg";
import checkList from "../../../../../../../Images/Bearish/Light clipboard.svg";
import whiteBoard from "../../../../../../../Images/Bearish/Light laptop.svg";
import docs_wikis from "../../../../../../../Images/Bearish/Light hybrid_view.svg";
import notes from "../../../../../../../Images/Bearish/Light document.svg";
import add from "../../../../../../../Images/Bearish/add_circled.svg";
import folder from "../../../../../../../Images/Bearish/Light folder.svg";
import folder_add from "../../../../../../../Images/Bearish/Light folder_add.svg";
import {ExpandMore} from "@mui/icons-material";
import DrawerInput from "../../../../../../Layout/DefaultLayout/components/DrawerSubMenu/DrawerInput";
import DrawerOptions from "../../../../../../Layout/DefaultLayout/components/DrawerSubMenu/DrawerOptions";
import CreateWorkSpace from "../../../../../../Layout/DefaultLayout/components/DrawerSubMenu/CreateWorkSpace";
import search from "../../../../../../../Images/Bearish/search.svg";

const Workspace = () => {

    const [routeList, setRouteList] = useState([
        {
            name: 'Workspaces',
            icon: check_circledIcon,
            subRout: [
                {
                    name: 'Search Bearish OS',
                    icon: search,
                },
                {
                    name: "WorkSpace Name",
                    icon: WorkSpaceIcon,
                    authRequired: true,
                    options: [
                        {
                            name: "Boards",
                            icon: boards,
                            authRequired: true,
                        },
                        {
                            name: "Checklists",
                            icon: checkList,
                            authRequired: true,
                        },
                        {
                            name: "WhiteBoards",
                            icon: whiteBoard,
                            authRequired: true,
                        },
                        {
                            name: "List",
                            icon: listIcon,
                            authRequired: true,
                        },
                        {
                            name: "Docs and Wikis",
                            icon: docs_wikis,
                            authRequired: true,
                        },
                        {
                            name: "Notes",
                            icon: notes,
                        },
                        {
                            name: "Add an Item",
                            icon: add,
                        },
                    ]
                },
                {
                    name: "Folders",
                    icon: folder,
                    options: [
                        {
                            name: "Folder Name",
                            icon: folder,
                        },
                        {
                            name: "Create New Folder",
                            icon: folder_add,
                        }
                    ]
                },
            ]
        },
        {
            name: 'Create a Workspace',
            icon: add,
        },
    ]);

    const [drawOptions, setDrawOptions] = useState();
    const [openAccodian, setOpenAccodian] = useState();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleListClick = (event, options, i) => {
        setOpenAccodian(i);
        setDrawOptions(options);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRoutClick = (event) => {
        if (event.currentTarget.innerText === 'Create a Workspace') {
            setAnchorEl(event.currentTarget);
            setDrawOptions(null)
        }
    };

    return (
        <>
            <Stack className={classes.workspaceMain}>
                <Stack padding={'20px 7px 52px 8px'}>
                    <Stack gap={'20px'}>
                        <Stack className={classes.workspaceTitle}>
                            Workspaces
                        </Stack>
                        <List disablePadding sx={{gap: 1}} className={classes.accodian_list}>
                            {
                                routeList.map(
                                    ({name, icon, subRout, color = ''}, i) =>
                                        <>
                                            <Accordion disableGutters square elevation={0}
                                                       sx={{
                                                           flex: name === "Create a Workspace" ? "1" : "0",
                                                           '&:before': {display: 'none',}
                                                       }}
                                                       key={i} className={classes.main_accodian}>
                                                <AccordionSummary
                                                    expandIcon={subRout ? <ExpandMore/> : ""}
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
                                                            <DrawerInput placeholder={"Search Bearish OS"}/> :
                                                            <ListItem sx={{padding: 0,}}
                                                                      onClick={(e) => handleRoutClick(e)}>
                                                                <Stack
                                                                    sx={{
                                                                        my: 0.3,
                                                                    }} className={classes.drawerButton}>
                                                                    <Stack direction={'row'} gap={'15px'}>
                                                                        <img className={classes.drawerIcon} src={icon}
                                                                             alt={name}/>
                                                                        <Typography
                                                                            className={classes.drawerListText}>{name}</Typography>
                                                                    </Stack>
                                                                </Stack>
                                                            </ListItem>
                                                    }
                                                </AccordionSummary>
                                                <AccordionDetails className={classes.subRout_accodianDetails}>
                                                    {
                                                        subRout?.map(
                                                            ({name, icon, options}, i) =>
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
                                                                    <ListItemButton
                                                                        sx={{
                                                                            padding: 0,
                                                                            my: 0,
                                                                        }}
                                                                        className={classes.subDrawerButton}
                                                                    >
                                                                        <Stack direction={'row'} gap={'15px'}>
                                                                            <img className={classes.drawerIcon}
                                                                                 src={icon}
                                                                                 alt={name}/>
                                                                            <Typography
                                                                                className={classes.drawerListText}>{name}</Typography>
                                                                        </Stack>
                                                                        <img
                                                                            src={openAccodian === i && open ? forWardArrow : upIcon}
                                                                            alt="arrow"/>
                                                                    </ListItemButton>
                                                                </ListItem>
                                                        )
                                                    }
                                                </AccordionDetails>
                                            </Accordion>
                                        </>
                                )
                            }
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 280,
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                menuStyle={{boxShadow: 'none'}}
                                PaperProps={{
                                    style: {width: '300px', marginLeft: '20px', border: "2px solid white"},
                                }}
                            >
                                {drawOptions ? <DrawerOptions options={drawOptions}/> : <CreateWorkSpace/>}

                            </Popover>
                        </List>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default Workspace;
