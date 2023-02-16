import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

const Workspace = () => {
  const [select, setSelect] = useState("workspaces")
  const location = useLocation()
  const navigate = useNavigate()
  const handleNavigate = (name) => {
    setSelect(name)
    if (name === "workspaces") {
      navigate(`/workspace`)
    } else if (name === "cloudDrives") {
      navigate(`/cloud-drives`)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: "center" }}>
      <Box sx={{ borderBottom: select === "workspaces" && location.pathname.includes("workspace") && "2px solid #5EE2A0", marginRight: "50px", cursor: "pointer" }} onClick={() => handleNavigate("workspaces")} >
        <Typography sx={{ font: "normal normal 400 18px/25px Source Serif Pro" }} >Workspaces</Typography>
      </Box>
      <Box sx={{ borderBottom: select === "cloudDrives" && location.pathname.includes("cloud-drives") && "2px solid #5EE2A0", marginRight: "50px", cursor: "pointer" }} onClick={() => handleNavigate("cloudDrives")}>
        <Typography sx={{ font: "normal normal 400 18px/25px Source Serif Pro" }} >Cloud Drives</Typography>
      </Box>
      <Box sx={{ borderBottom: select === "supercharges" && "2px solid #5EE2A0", marginRight: "50px", cursor: "pointer" }} onClick={() => handleNavigate("supercharges")}>
        <Typography sx={{ font: "normal normal 400 18px/25px Source Serif Pro" }} >Supercharges</Typography>
      </Box>
    </Box>
  )
}

export default Workspace;