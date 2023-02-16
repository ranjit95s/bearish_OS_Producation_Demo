import React, {useRef, useState} from "react";
import {Stack} from "@mui/material";
import classes from "./Dropdown.module.css";
import downIcon from "../../../Images/Bearish/chevron_down.svg";
import upIcon from "../../../Images/Bearish/chevron_up.svg";
import searchIcon from "../../../Images/Bearish/search.svg";
import Popover from "@mui/material/Popover/Popover";

const INITIAL_ARRAY = [{
    name: 'milan kodinariya',
    email: 'test@test.com'
}, {
    name: 'ailan kodinariya',
    email: 'test@test.com'
}, {
    name: 'bilan kodinariya',
    email: 'test@test.com'
}, {
    name: 'cilan kodinariya',
    email: 'test@test.com'
}, {
    name: 'dilan kodinariya',
    email: 'test@test.com'
}, {
    name: 'rilan kodinariya',
    email: 'test@test.com'
}, {
    name: 'tilan kodinariya',
    email: 'test@test.com'
}, {
    name: 'yilan kodinariya',
    email: 'test@test.com'
}, {
    name: 'uilan kodinariya',
    email: 'test@test.com'
}, {
    name: 'iilan kodinariya'
}, {
    name: 'oilan kodinariya',
    email: 'test@test.com'
}, {
    name: 'wilan kodinariya',
    email: 'test@test.com'
}, {
    name: 'qilan kodinariya',
    email: 'test@test.com'
},
];

const SearchDropdown = (props) => {
    const {placeholder, handleSelect, handleSearch, searchValue} = props;
    const dropRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const searchUserName = (name) => {
        const userName = name.split(" ");
        return userName?.[0]?.charAt(0).toLocaleUpperCase() + "" + userName?.[1]?.charAt(0).toLocaleUpperCase()
    };
    return (
        <>
            <Stack>
                <Stack className={classes.selectView} ref={dropRef}>
                    <Stack className={classes.selectTab} onClick={(e) => setIsOpen(() => !isOpen)}>
                        <Stack className={classes.selectName}>
                            {placeholder}
                        </Stack>
                        <img style={{opacity: 0.5}} src={isOpen ? downIcon : upIcon} alt={''}/>
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
                            <Stack padding={'17px 22px 5px 8px'} gap={'20px'}>
                                <Stack direction={'row'} gap={'5px'}>
                                    <img src={searchIcon} alt={''}/>
                                    <input
                                        placeholder={'Search Users'}
                                        className={classes.search}
                                        type={'text'}
                                        value={searchValue || ''}
                                        onChange={({target}) => handleSearch(target.value)}/>
                                </Stack>
                            </Stack>
                            <Stack className={classes.searchUserList}>
                                <Stack gap={'15px'}>
                                    {(INITIAL_ARRAY || []).map((item, index) => (
                                        <>
                                            <Stack
                                                key={index}
                                                className={classes.searchItem}
                                                onClick={() => {
                                                    handleSelect(item);
                                                    setIsOpen(() => false)
                                                }}
                                            >
                                                <Stack className={classes.searchUserIcon}>
                                                    {searchUserName(item.name)}
                                                </Stack>
                                                <Stack gap={'4px'}>
                                                    <Stack fontSize={'17px'}>
                                                        {item.name}
                                                    </Stack>
                                                    <Stack fontSize={'12px'}>
                                                        {item.email}
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </>
                                    ))}
                                </Stack>
                            </Stack>
                        </Stack>
                    </Popover>
                </Stack>
            </Stack>
        </>

    )
};
export default SearchDropdown
