import {
    FETCHING_FOLDER
} from "./actionType";


export const get_folders = (payload) => ({
    type: FETCHING_FOLDER,
    method: 'GET',
    url: `/folders?driveId=${payload.driveId}`,
    axiosService: true,
    payload
});