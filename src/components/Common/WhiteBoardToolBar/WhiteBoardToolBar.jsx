import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import classes from "./WhiteBoardToolBar.module.css"
import click from "../../../Images/Bearish/orangeClick-Arrow.svg"
import textIcon from "../../../Images/Bearish/orangeA.svg"
import lineIcon from "../../../Images/Bearish/orangeLine.svg"
import triangle from "../../../Images/Bearish/orange-Triangle.svg"
import square from "../../../Images/Bearish/orangeSquare.svg"
import arrow from "../../../Images/Bearish/orangeRightArrow.svg"
import write from "../../../Images/Bearish/orangePen.svg"
import uploard from "../../../Images/Bearish/orangeImgIcon.svg"

const Tools = [
    {
        name: "Click",
        value: "click",
        icon: click
    },
    {
        name: "Text",
        value: "text",
        icon: textIcon
    },
    {
        name: "Line",
        value: "line",
        icon: lineIcon
    },
    {
        name: "Triangle",
        value: "triangle",
        icon: triangle
    },
    {
        name: "Circle",
        value: "circle",
        icon: triangle
    },
    {
        name: "Square",
        value: "square",
        icon: square
    },
    {
        name: "Arrow",
        value: "arrow",
        icon: arrow
    },
    {
        name: "Write",
        value: "write",
        icon: write
    },
    {
        name: "Upload",
        value: "upload",
        icon: uploard
    },
    {
        name: "Erase",
        value: "erase",
        icon: write
    },
]

const WhiteBoardToolBar = () => {
    return (
        <Box className={classes.toolbarConatiner}>
            <Box>
                <Typography className={classes.toolHeading} >Tools</Typography>
            </Box>
            <Box>
                {
                    Tools?.map((ele, index) => (
                        <React.Fragment key={index}>
                            <Box className={classes.mainBox}>
                                <Box className={classes.toolBox}>
                                    <Typography className={classes.toolName}>{ele.name}</Typography>
                                    <img src={ele.icon} alt="" className={classes.icon} />
                                </Box>
                            </Box>
                        </React.Fragment>
                    ))
                }
            </Box>
            
        </Box>
    )
}

export default WhiteBoardToolBar
