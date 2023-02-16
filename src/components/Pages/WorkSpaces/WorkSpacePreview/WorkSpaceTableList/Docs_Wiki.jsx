import { Stack, TableBody } from '@mui/material'
import React, { useState } from 'react'
import WorkSpaceTable from '../../../../Common/WorkSpaceTable.jsx/WorkSpaceTable'
import { clsx } from "clsx"
import classes from "./Docs_Wiki.module.css"
import parsone from "../../../../../Images/Bearish/parsonGreenicon.svg"
import editLogo from "../../../../../Images/Bearish/Light_edit.svg"
import Trash from "../../../../../Images/Bearish/trashRedIcon.svg"
import Analytics from "../../../../../Images/Bearish/trending_up.svg"
import Comments from "../../../../../Images/Bearish/full_smiley.svg"
import colorPicker from "../../../../../Images/Bearish/eye_dropper_blue.svg"
import WorkSpaceDrawer from '../../../../Common/WorkSpaceMenu/WorkSpaceDrawer'
import CreateInput from '../../../../Common/CreateInput/CreateInput'
import document from "../../../../../Images/Bearish/document.svg"
import database from "../../../../../Images/Bearish/database.svg"
import { useNavigate, useParams } from 'react-router-dom'

const INITIAL_ARRAY = [
  {
    id: "1",
    workSpaceName: "Bearish OS Welcome Workspace",
    type: "folder",
    totleItem: "0000",
    user: [
      {
        id: "1",
        name: "MK"
      },
      {
        id: "2",
        name: "MK"
      },
      {
        id: "3",
        name: "MK"
      },
      {
        id: "4",
        name: "MK"
      },
    ],
    color: "#E9EDF2"

  },
  {
    id: "2",
    workSpaceName: "Bearish OS Welcome Workspace",
    type: "document",
    totleItem: "0000",
    user: [
      {
        id: "1",
        name: "MK"
      },
      {
        id: "2",
        name: "MK"
      },
      {
        id: "3",
        name: "MK"
      },
      {
        id: "4",
        name: "MK"
      },
    ],
    color: "#E9EDF2"

  },
  {
    id: "3",
    workSpaceName: "Bearish OS Welcome Workspace",
    type: "wiki",
    totleItem: "0000",
    user: [
      {
        id: "1",
        name: "MK"
      },
      {
        id: "2",
        name: "MK"
      },
      {
        id: "3",
        name: "MK"
      },
      {
        id: "4",
        name: "MK"
      },
    ],
    color: "#E9EDF2"

  },
]

const drawOptions = [
  {
    name: "Share Now",
    icon: parsone,
  },
  {
    name: "Rename",
    icon: editLogo,
  },
  {
    name: "Item Color",
    icon: colorPicker,
  },
  {
    name: "Analytics",
    icon: Analytics,
  },
  {
    name: "Comments",
    icon: Comments,
  },
  {
    name: "Delete",
    icon: Trash,
  },
];

const INPUTiCONS = [
  {
    icon: document,
    value: "folder",
    placeHolder: "Create New Doc",
    type: 'folder',
  },
  {
    icon: database,
    value: "folder",
    placeHolder: "Create New Wiki",
    type: 'wiki',
  }
]

const Docs_Wiki = ({ openAccodian }) => {
  const [tableData, setTableData] = useState(INITIAL_ARRAY);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [itemType, setItemType] = useState('document');
  const { id } = useParams();
  const navigate = useNavigate()
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavigate = (e, subId, type) => {
    if (type === "wiki") {
      navigate(`/workspace/${id}/wiki/${subId}`)
    } else if (type === "document") {
      navigate(`/workspace/${id}/document/${subId}`)
    } else if (type === "folder") {
      navigate(`/workspace/${id}/document/${subId}`)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const lastIndexId = tableData[tableData.length - 1]
    const newList = {
      id: lastIndexId.id + 1,
      workSpaceName: e.target.workSpaceName.value,
      type: itemType,
      totleItem: "0000",
      user: [
        {
          id: "1",
          name: "MK"
        },
        {
          id: "2",
          name: "MK"
        },
        {
          id: "3",
          name: "MK"
        },
        {
          id: "4",
          name: "MK"
        },
      ],
      color: "#E9EDF2"
    }
    setTableData([...tableData, newList])
    setItemType('document')
    e.target.workSpaceName.value = ""
  }

  return (
    <>
      <TableBody className={clsx(openAccodian ? classes.accodianShow : classes.accodianHide)}>
        {
          tableData?.map((row, index) => (
            <React.Fragment key={index}>
              <WorkSpaceTable row={row} index={index} handleOpenSideMenu={handleOpenMenu} handleNavigateRout={handleNavigate} />
            </React.Fragment>
          ))
        }
      </TableBody>
      <WorkSpaceDrawer drawOptions={drawOptions} anchorEl={anchorEl} handleClose={handleCloseMenu} />
      <Stack className={classes.inputContainer}>
        <CreateInput placeHolder={"Create New Doc & Wiki"} INPUTiCONS={INPUTiCONS} onSubmit={onSubmit} setItemType={setItemType} />
      </Stack>
    </>
  )
}

export default Docs_Wiki;
