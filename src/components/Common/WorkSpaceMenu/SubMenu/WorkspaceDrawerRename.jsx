import React from "react";
import { Popover, Stack } from "@mui/material";
import classes from './WorkspaceDrawerRename.module.css'

const DrawerOptionsSub = (props) => {
  return (
    <>
      <Popover
        id={props?.id}
        open={props?.open}
        anchorEl={props?.anchorEl}
        onClose={props?.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: -350,
        }}
        transformOrigin={{
          vertical: 25,
          horizontal: 'left',
        }}
        menuStyle={{ boxShadow: 'none' }}
      >
        <Stack className={classes.workSpaceDrawerStack} sx={{ padding: "21px" }}>
          <input className={classes.inputRename} placeholder="Workspace Name" />
          <Stack className={classes.button}>
            Rename
          </Stack>
        </Stack>
      </Popover>
    </>
  )
}

export default DrawerOptionsSub;
