import {
    FETCHING_FOLDER_AND_FILES
} from "./actionType";


export const get_folders = (payload) => ({
    type: FETCHING_FOLDER_AND_FILES,
    method: 'POST',
    url: '/api/getFolderAndFile',
    axiosService: true,
    payload
});