import { Button, Popover, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import classes from "./NotesFolderMenu.module.css"

const FOLDER_ARRAY = [
  {
    name: "Folder One",
  },
  {
    name: "Folder One",
  },
  {
    name: "Folder One",
  },
  {
    name: "Folder One",
  }
]

const NotesFolderMenu = (props) => {
  return (
    <Box>
      <>
        <Popover
          id={props?.id}
          open={props?.open}
          anchorEl={props?.anchorEl}
          onClose={props?.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 25,
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: 'left',
          }}
          menuStyle={{ boxShadow: 'none' }}
        >
          <Box className={classes.OptionContainer} sx={{ width: "200px", padding: "5px 0px" }}>
            {
              FOLDER_ARRAY?.map((ele, i) => (
                <Box className={classes.mainBox}>
                  <button className={classes.btncontainer} >
                    <Typography className={classes.nameText} >{ele.name}</Typography>
                  </button>
                </Box>
              ))
            }

            <Box className={classes.buttonContainer}>
              <Button className={classes.movebtn}>Move Now</Button>
            </Box>
          </Box>
        </Popover>
      </>
    </Box>
  )
}

export default NotesFolderMenu
