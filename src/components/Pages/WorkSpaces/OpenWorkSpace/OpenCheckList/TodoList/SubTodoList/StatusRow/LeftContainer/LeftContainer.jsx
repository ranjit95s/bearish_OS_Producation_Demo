import { IconButton, Popover, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import classes from './LeftContainer.module.css';

const LeftContainer = ({ Items }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <Stack key={Items.id}>
            <Stack className={classes.boxflex}>
                <Stack className={classes.checkimg}>
                    <img src={Items.moreimg} alt="checkall" />
                </Stack>
                <IconButton className={classes.checkimg}>
                    <img src={Items.ckeckall} alt="checkall" />
                </IconButton>
                <Typography className={classes.listtext}>{Items.description}</Typography>
                <Stack className={classes.buttongroup}>
                    <IconButton className={classes.noteimg}
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                    >
                        <img src={Items.noteimg} alt="note" />
                    </IconButton>
                    <IconButton className={classes.justifyimg}
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                    >
                        <img src={Items.menu} alt="justify" />
                    </IconButton>
                </Stack>
            </Stack>

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                PaperProps={{
                    style: {
                        width: '300px',
                        height: '150px',
                        borderRadius: '5px'
                    },
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
            </Popover>
        </Stack>
    )
}

export default LeftContainer;
