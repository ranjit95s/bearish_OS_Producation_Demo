import React, { useState } from 'react'
import { Avatar, AvatarGroup, Box, Checkbox, IconButton, ListItem, Menu, Popover, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import classes from './ListModal.module.css'
import editLogo from "../../../Images/Bearish/Light_edit.svg"
import insertLeft from "../../../Images/Bearish/Light_arrow_forward.svg"
import insertRight from "../../../Images/Bearish/Light_arrow_backward.svg"
import sort from "../../../Images/Bearish/Light_sort_ascending.svg"
import hide from "../../../Images/Bearish/Light_hide.svg"
import Trash from "../../../Images/Bearish/trash.svg"
import upArrow from "../../../Images/Bearish/Light_upArrow.svg"
import closeIcon from "../../../Images/Bearish/close_circled.svg"


const drawOptions = [
  {
    name: "Rename Field",
    icon: editLogo,
  },
  {
    name: "Insert right",
    icon: insertRight,
  },
  {
    name: "Insert left",
    icon: insertLeft,
  },
  {
    name: "Sort A/Z",
    icon: sort,
  },
  {
    name: "Hide field",
    icon: hide,
  },
  {
    name: "Delete field",
    icon: Trash,
  },
];

const ListModal = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick = (event, name) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>

      <IconButton onClick={handleOpenMenu} className={classes.combineMenu}>
        <img src={upArrow} />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 160,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        menuStyle={{ boxShadow: 'none' }}
        PaperProps={{
          style: { width: '150px', height: "auto", paddingBottom: "9px", border: "2px solid white" },
        }}
      >
        <Stack direction="row" className={classes.menuStackMain}>
          <Stack direction="row" className={classes.menuStack}>
            Menus
          </Stack>
          <Stack direction="row" onClick={handleCloseMenu} className={classes.menuClose}>
            <img src={closeIcon} height={20} width={20} />
          </Stack>
        </Stack>

        <Box sx={{ width: "150px" }}>
          {
            drawOptions?.map((ele, i) => (
              <ListItem
                key={i}
                className={classes.listItem}
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
        </Box>
      </Popover>

    </>
  )
}

export default ListModal;
