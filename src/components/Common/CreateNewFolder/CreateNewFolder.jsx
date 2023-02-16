import React from "react";
import Stack from "@mui/material/Stack";
import classes from "./CreateNewFolder.module.css";

const CreateNewFolder = (props) => {
    const {handleCreate} = props;
    return (
        <>
            <Stack width={'100%'}>
                <Stack className={classes.createFolderMain}>
                    <input id={'create-a-new-folder'} placeholder={'Create a New Folder'}
                           className={classes.folderInput}/>
                    <Stack alignItems={'flex-end'}>
                        <Stack className={classes.createBtn}
                               onClick={() => handleCreate(document.getElementById('create-a-new-folder').value)}>
                            Create
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default CreateNewFolder;
