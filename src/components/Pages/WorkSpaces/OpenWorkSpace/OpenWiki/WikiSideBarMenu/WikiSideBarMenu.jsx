import { Box, IconButton, Typography, Button, Stack, Menu } from '@mui/material'
import React, { useRef, useState } from 'react'
import classes from "./WikiSideBarMenu.module.css"
import add_circled from "../../../../../../Images/Bearish/add_circled.svg"
import more_vertical from "../../../../../../Images/Bearish/more_vertical.svg"
import chevron_down from "../../../../../../Images/Bearish/chevron_down.svg"
import chevron_up from "../../../../../../Images/Bearish/chevron_up.svg"
import WikiMenu from '../../../../WikiMenu/WikiMenu'

const WikiSideBarMenu = () => {
    const [wikiElement, setWikiElement] = useState([])
    const [createWiki, setCreateWiki] = useState(false);
    const [createSubWiki, setCreateSubWiki] = useState(false);
    const [collapse, setCollapse] = useState(false)
    const currentindex = useRef(0)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isAnchorEl = Boolean(anchorEl);

    const handleNewWiki = () => {
        setCreateWiki(true)
    }

    const handleCreateWiki = (event) => {
        event.preventDefault()
        let lastElement = wikiElement.length;
        const newWiki = {
            id: lastElement + 1,
            name: event.target.wikiName.value,
            subWiki: []
        }
        setWikiElement([...wikiElement, newWiki])
        setCreateWiki(false)
    }

    const handleSubItem = (event) => {
        event.preventDefault()
        const subWikiObj = {
            subName: event.target.wikiName.value
        }
        setWikiElement((pre) => pre.map((wikiCollection, i) => i === currentindex.current ? { ...wikiCollection, subWiki: [...wikiCollection.subWiki, subWikiObj] } : wikiCollection))
        setCreateSubWiki(false)
    }

    const handleAddSubItem = (e, index) => {
        currentindex.current = index
        setCreateSubWiki(true)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className={classes.mainContainer}>
            <Box>
                <Box className={classes.headContainer}>
                    <Stack className={classes.headerFlex}>
                        <Typography className={classes.headerName} >Wiki Name</Typography>
                        <IconButton onClick={() => handleNewWiki()}>
                            <img src={add_circled} alt="circled" className={classes.addIcon} />
                        </IconButton>
                    </Stack>
                </Box>
                {
                    wikiElement?.map((ele, index) => (
                        <React.Fragment key={index}>
                            <Box className={classes.createdMianContainer}>
                                <Box className={classes.createdContainer}>
                                    {
                                        ele?.subWiki?.length ?
                                            <IconButton className={classes.collapseBtn} onClick={() => setCollapse(!collapse)} >
                                                <img src={collapse ? chevron_up : chevron_down} alt="" />
                                            </IconButton> : null
                                    }
                                    <Typography className={classes.inputContainer}>{ele.name}</Typography>
                                    <Stack className={classes.createdLeftContainer}>
                                        <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
                                            <img src={more_vertical} alt="" className={classes.menuBtn} />
                                        </IconButton>
                                        <IconButton onClick={(e) => handleAddSubItem(e, index)} >
                                            <img src={add_circled} alt="" className={classes.addIcon} />
                                        </IconButton>
                                    </Stack>
                                </Box>
                            </Box>
                            {collapse &&
                                ele?.subWiki?.map((collection) => (
                                    <Box className={classes.subItemContainer}>
                                        <Typography className={classes.inputContainer}>{collection.subName}</Typography>
                                        <Stack className={classes.createdLeftContainer}>
                                            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
                                                <img src={more_vertical} alt="" className={classes.menuBtn} />
                                            </IconButton>
                                        </Stack>
                                    </Box>
                                ))
                            }
                        </React.Fragment>
                    ))
                }
                {createSubWiki &&
                    <Box className={classes.subItemContainer}>
                        <form onSubmit={handleSubItem} >
                            <Box className={classes.subContainer}>
                                <input name='wikiName' type="text" placeholder='Wiki Name' className={classes.inputContainer} />
                                <Button type='submit' className={classes.createBtn} >
                                    Add Sub Item
                                </Button>
                            </Box>
                        </form>
                    </Box>}
                {createWiki &&
                    <form onSubmit={handleCreateWiki} >
                        <Box className={classes.createInputContainer} >
                            <input name='wikiName' type="text" placeholder='Wiki Name' className={classes.inputContainer} />
                            <Button type='submit' className={classes.createBtn} >
                                Create
                            </Button>
                        </Box>
                    </form>
                }
            </Box>
            <Menu
                open={isAnchorEl}
                anchorEl={anchorEl}
                PaperProps={{
                    style: {
                        width: "150px",
                        height: "175px"
                    }
                }}
                onClose={handleClose}>
                <WikiMenu handleClose={handleClose} />
            </Menu>
        </Box>
    )
}

export default WikiSideBarMenu
