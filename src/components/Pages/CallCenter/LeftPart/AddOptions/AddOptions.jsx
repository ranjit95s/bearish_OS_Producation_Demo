import React, {useState} from "react";
import {Stack} from "@mui/material";
import addIcon from "../../../../../Images/Bearish/add_circled.svg";
import videoIcon from "../../../../../Images/Bearish/video_recorder.svg";
import listIcon from "../../../../../Images/Bearish/Light list.svg";

const INITIAL_ARRAY = [
    {
        name: 'Add Event',
        icon: listIcon
    }, {
        name: 'Add Task',
        icon: addIcon
    }, {
        name: 'Add Call',
        icon: videoIcon
    },
];

const AddOptions = () => {

    const [state, setState] = useState(INITIAL_ARRAY);

    return (
        <>
            <Stack>
                <Stack direction={'row'} gap={'10px'}>
                    {(state || []).map((value, index) => (
                        <Stack key={index} direction={'row'} gap={'5px'} sx={{opacity: 0.5}}>
                            <img width={'15px'} src={value.icon} alt={''}/>
                            <Stack fontSize={'11px'}>
                                {value.name}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </>
    )
};
export default AddOptions;
