import React from "react";
import classes from "./Index.module.css";

const NoOutlineInput = (props) => {
    const {onChange, placeholder, value} = props;
    return (
        <>
            <input
                placeholder={placeholder}
                className={classes.noOutLine}
                type={'text'}
                value={value}
                onChange={({target}) => onChange(target)}
            />
        </>
    )
};
export default NoOutlineInput