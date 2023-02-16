import React from "react";
import classes from './AddToList.module.css';
import { Box, ListItem, Stack, Typography } from '@mui/material';
import alarm from "../../../Images/Bearish/trash.svg";
import attachment from "../../../Images/Bearish/attachment.svg";
import status from "../../../Images/Bearish/check_all.svg";
import subtask from "../../../Images/Bearish/checkbox_unchecked.svg";
import priority from "../../../Images/Bearish/flag.svg";
import text from "../../../Images/Bearish/Light list.svg";
import approval from "../../../Images/Bearish/multiselect.svg";
import reporter from "../../../Images/Bearish/profile_circled.svg";
import assigne from "../../../Images/Bearish/privacy.svg";
import notes from "../../../Images/Bearish/note.svg";


const drawOptions = [
  {
    name: "Due Date",
    value: "dueDate",
    icon: alarm,
  },
  {
    name: "Text",
    value: "text",
    icon: text,
  },
  {
    name: "Subtask",
    value: "subtask",
    icon: subtask,
  },
  {
    name: "Reporter",
    value: "reporter",
    icon: reporter,
  },
  {
    name: "Assignee",
    value: "assignee",
    icon: assigne,
  },
  {
    name: "Approval",
    value: "approval",
    icon: approval,
  },
  {
    name: "Label",
    value: "label",
    icon: reporter,
  },
  {
    name: "Attachment",
    value: "attachment",
    icon: attachment,
  },
  {
    name: "Notes",
    value: "notes",
    icon: notes,
  },
  {
    name: "Priority",
    value: "priority",
    icon: priority,
  },
  {
    name: "Status",
    value: "status",
    icon: status,
  },
];


const AddToList = ({ addColumn, setOpenMenu }) => {

  const closeMenu = () => {
    setOpenMenu(null);
  }

  return (
    <>
      <Stack sx={{ width: '150px', height: "auto", padding: "20px 12px 28px 13px", border: "2px solid white" }} >
        <Stack direction="row" className={classes.menuStack}>
          Add to List
        </Stack>
        <Box className={classes.box}>
          {
            drawOptions?.map((ele, i) => (
              <ListItem
                key={i}
                className={classes.listItem}
                onClick={() => addColumn(i, ele.value)}
              >
                <Stack className={classes.drawerOptionStack} onClick={closeMenu} >
                  <Stack direction={'row'} gap={'10px'} className={classes.drawerDiv} >
                    <img className={classes.iconWidth} src={ele.icon} alt={ele.name} />
                    <Typography className={classes.drawerListText} >{ele.name}</Typography>
                  </Stack>
                </Stack>
              </ListItem>
            ))
          }
        </Box>
      </Stack>
    </>
  )
}
export default AddToList;
