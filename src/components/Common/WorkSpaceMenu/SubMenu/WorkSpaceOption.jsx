import React, { useState } from 'react';
import { ListItem, Stack, Typography, Box } from '@mui/material';
import classes from "./WorkSpaceOption.module.css";
import WorkspaceDrawerAddItem from "./WorkspaceDrawerAddItem"
import WorkspaceDrawerRename from "./WorkspaceDrawerRename"
import NotesFolderMenu from './NotesFolderMenu';



const WorkSpaceOption = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [namePop, setNamePop] = useState("");

  const handleClick = (event, name) => {
    setNamePop(name)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box sx={{ width: "150px" }}>
      {
        props?.options?.map((ele, i) => (
          <ListItem
            key={i}
            className={classes.listItem}
            onClick={(e) => handleClick(e, ele?.name)}
          >
            <Stack className={classes.drawerOptionStack}>
              <Stack direction={'row'} gap={'10px'} className={classes.drawerDiv}>
                <img className={classes.iconWidth} src={ele.icon} alt={ele.name} />
                <Typography className={classes.drawerListText}>{ele.name}</Typography>
              </Stack>
            </Stack>
          </ListItem>
        ))
      }
      {namePop === "Rename" && <WorkspaceDrawerRename anchorEl={anchorEl} handleClose={handleClose} id={id} open={open} />}
      {namePop === "Add an Item" &&
        <WorkspaceDrawerAddItem anchorEl={anchorEl} handleClose={handleClose} id={id} open={open} />
      }
      {namePop === "Move to Folder" && <NotesFolderMenu anchorEl={anchorEl} handleClose={handleClose} id={id} open={open} />}
    </Box >
  )
};

export default WorkSpaceOption;
