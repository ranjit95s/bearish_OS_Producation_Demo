import React from 'react'
import { Stack } from '@mui/system';
import classes from './BoardUserModel.module.css'
import searchIcon from '../../../../../../../../Images/Bearish/search.svg'
import addcircel from '../../../../../../../../Images/Bearish/add_circled.svg'
import checkgreen from '../../../../../../../../Images/Bearish/check-Green.svg'

const INITIAL_ARRAY = [
    {
        id: '1',
        name: 'Full Name',
        email: 'bearishtestemail@gamil.com',
        createimg: addcircel,
    },
    {
        id: '2',
        name: 'Full Name',
        email: 'bearishtestemail@gamil.com',
        createimg: addcircel,
    },
    {
        id: '3',
        name: 'Full Name',
        email: 'bearishtestemail@gamil.com',
        createimg: addcircel,
    },
    {
        id: '4',
        name: 'Full Name',
        email: 'bearishtestemail@gamil.com',
        createimg: checkgreen,
    }
];

const BoardUserModel = () => {

    const searchUserName = (name) => {
        const userName = name.split(" ");
        return userName?.[0].charAt(0).toLocaleUpperCase() + "" + userName?.[1].charAt(0).toLocaleUpperCase()
    };

    return (
        <Stack fontFamily={'Source Serif Pro'}>
            <Stack gap={'5px'} padding={'5px 10px 5px 10px'}>
                <Stack direction={'row'} gap={'5px'} className={classes.searchConatiner} >
                    <img alt={''} className={classes.serchIcon} src={searchIcon} />
                    <input placeholder='Search Users' className={classes.assignToSearch} type={'text'} />
                </Stack>
                <Stack sx={{ height: '100%', overflowY: 'scroll', gap: '5px' }}>
                    {(INITIAL_ARRAY || []).map((item, index) => (
                        <React.Fragment key={index}>
                            <Stack>
                                <Stack key={index} direction={'row'} gap={'4px'} className={classes.dropDownContainer}>
                                    <Stack className={classes.dropDownsubContainer}>
                                        <Stack className={classes.searchUserIcon}>
                                            {searchUserName(item.name)}
                                        </Stack>
                                        <Stack className={classes.rightSideContainer} >
                                            <Stack className={classes.searchUserName}>
                                                {item.name}
                                            </Stack>
                                            <Stack className={classes.UserEmail}>
                                                {item.email}
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack className={classes.dropdwonimg}>
                                        <img src={item.createimg} alt="" />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </React.Fragment>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default BoardUserModel
