import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import classes from "./AddModal.module.css";
import Soon from "../../../../../../Common/Soon/Soon";

const INITIAL_ARRAY = [
    {
        name: 'Agenda',
        select: false,
        soon: false
    }, {
        name: 'Pre-Meeting Notes',
        select: false,
        soon: false
    }, {
        name: 'Add Workspace',
        select: false,
        soon: false
    }, {
        name: 'Add Web browser',
        select: false,
        soon: true
    }, {
        name: 'Post-Meeting Tasks',
        select: false,
        soon: false
    }
];

const AddModal = () => {

    const [state, setState] = useState(INITIAL_ARRAY);

    const handleSelect = (index) => {
        setState(pre => pre.map((eachOption, eachOptionIndex) => {
            return eachOptionIndex === index ?
                {
                    ...eachOption,
                    select: true
                } : {
                    ...eachOption,
                    select: false
                }
        }))
    };

    return (
        <>
            <Stack className={classes.addModalMain}>
                {(state || []).map((value, index) => (
                    <Stack
                        key={index}
                        className={value.select ? classes.selectedOption : classes.option}
                        onClick={() => handleSelect(index)}>
                        <Stack className={classes.name}>
                            <Stack>
                                {value.name}
                            </Stack>
                            {value.soon && <Stack marginRight={'4px'}>
                                <Soon/>
                            </Stack>}
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </>
    )
};
export default AddModal;
