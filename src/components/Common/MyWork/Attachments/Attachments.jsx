import React, {useRef, useState} from "react";
import {Stack} from "@mui/material";
import classes from "./Attachments.module.css";
import downIcon from "../../../../Images/Bearish/chevron_down.svg";
import upIcon from "../../../../Images/Bearish/chevron_up.svg";
import BearishIcon from "../../../../Images/Bearish/Bearish OS Logo.png";
import adobeCcIcon from "../../../../Images/Bearish/adobe cc.png";
import boxIcon from "../../../../Images/Bearish/box.png";
import driveIcon from "../../../../Images/Bearish/drive.png";
import DropboxIcon from "../../../../Images/Bearish/Dropbox.png";
import onedriveIcon from "../../../../Images/Bearish/onedrive2.png";
import uploadIcon from "../../../../Images/Bearish/upload-grey.svg";
import Popover from "@mui/material/Popover/Popover";

const INITIAL_ARRAY = [
    {
        name: 'Bearish',
        icon: BearishIcon
    }, {
        name: 'Google Drive',
        icon: driveIcon
    }, {
        name: 'Dropbox',
        icon: DropboxIcon
    }, {
        name: 'Box',
        icon: boxIcon
    }, {
        name: 'OneDrive',
        icon: onedriveIcon
    }, {
        name: 'Adobe CC',
        icon: adobeCcIcon
    }, {
        name: 'Upload',
        icon: uploadIcon
    },
];

const Attachments = (props) => {
    const {handleSelect, placeholder} = props;
    const dropRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Stack alignItems={'center'} direction={'row'} gap={'20px'}>
                <Stack fontSize={'18px'}>
                    Attachments
                </Stack>
                <Stack ref={dropRef}>
                    <Stack className={classes.selectView}>
                        <Stack className={classes.selectTab}
                               onClick={(e) => setIsOpen(pre => !isOpen)}>
                            <Stack className={classes.selectName}>
                                {placeholder}
                            </Stack>
                            <img src={isOpen ? downIcon : upIcon} alt={''}/>
                        </Stack>
                    </Stack>
                    <Popover
                        open={isOpen}
                        anchorEl={dropRef.current}
                        onClose={() => setIsOpen(pre => false)}
                        anchorOrigin={{
                            vertical: 'bottom',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        PaperProps={{
                            style: {
                                boxShadow: 'unset',
                                width: 'auto',
                                height: 'auto',
                                border: '1px solid #E9EDF2',
                                borderRadius: '5px',
                                marginTop: '5px'
                            },
                        }}
                    >
                        <Stack className={classes.dropdown}>
                            <Stack padding={'10px'} gap={'5px'}>
                                {(INITIAL_ARRAY || []).map((item, index) => (
                                    <Stack key={index}
                                           className={classes.dropdownItem}
                                           onClick={() => {
                                               handleSelect(item);
                                               setIsOpen(() => false)
                                           }}>
                                        <img style={{width: '15px'}} src={item.icon} alt={''}/>
                                        <Stack fontSize={'11px'}>
                                            {item.name}
                                        </Stack>
                                    </Stack>
                                ))}
                            </Stack>
                        </Stack>
                    </Popover>
                </Stack>
            </Stack>
        </>
    )
};
export default Attachments;
