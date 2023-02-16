import React from "react";
import { ListItem, Popover, Stack, Typography, Box } from '@mui/material';
import classes from "./WorkspaceDrawerAddItem.module.css";
import boards from "../../../../Images/Bearish/Light boards.svg"
import checkList from "../../../../Images/Bearish/Light clipboard.svg"
import whiteBoard from "../../../../Images/Bearish/Light laptop.svg"
import List from "../../../../Images/Bearish/Light list.svg"
import docs_wikis from "../../../../Images/Bearish/Light hybrid_view.svg"
import notes from "../../../../Images/Bearish/Light document.svg"


const options = [
  {
    name: "Boards",
    icon: boards,
  },
  {
    name: "Checklists",
    icon: checkList,
  },
  {
    name: "WhiteBoards",
    icon: whiteBoard,
  },
  {
    name: "List",
    icon: List,
  },
  {
    name: "Docs and Wikis",
    icon: docs_wikis,
  },
  {
    name: "Notes",
    icon: notes,
  },
]


const WorkspaceDrawerAddItem = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openAccodian, setOpenAccodian] = React.useState();

  const handleClick = (event, index) => {
    setOpenAccodian(index);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <>
      <Popover
        id={props?.id}
        open={props?.open}
        anchorEl={props?.anchorEl}
        onClose={props?.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: -250,
        }}
        transformOrigin={{
          vertical: 25,
          horizontal: 'left',
        }}
        menuStyle={{ boxShadow: 'none' }}
      >
        <Box className={classes.OptionContainer} sx={{ width: "500px" }}>
          {
            options?.map((ele, i) => (
              <ListItem
                key={i}
                className={classes.listItem}
                onClick={(e) => handleClick(e, i)}
              >
                <Stack sx={{
                  px: {
                    xs: 1.15,
                    sm: 1.15
                  },
                  py: {
                    xs: 1.15,
                    sm: 1.15
                  },
                  my: 0.3,
                  boxShadow: 'unset !important',
                }}>
                  <Stack direction={'row'} gap={'10px'}>
                    <img style={{ width: '25px', height: '25px' }} src={ele.icon} alt={ele.name} />
                    <Typography className={classes.drawerListText}>{ele.name}</Typography>
                  </Stack>
                </Stack>
              </ListItem>
            ))
          }
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
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
            <Stack className={classes.workspaceDrawerAddItemStack} sx={{ padding: "21px" }}>
              <input className={classes.inputAddItem} placeholder="Name your [Item Name]" />
              <Stack className={classes.button}>
                Create
              </Stack>
            </Stack>
          </Popover>
        </Box>
      </Popover>
    </>
  )
}

export default WorkspaceDrawerAddItem;
