import {
    FETCHING_FOLDER_AND_FILES
} from "../action/actionType";

const initialState = {
    isFetching: false,
    errorMessage: "",
    latestFOLDER_File: []
};

const folderFileFetchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case `${FETCHING_FOLDER_AND_FILES}_ERROR`:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            };
        case `${FETCHING_FOLDER_AND_FILES}_FETCHING`:
            return {
                ...state,
                isFetching: false,
                latestFOLDER_File: payload
            };
        default:
            return state;
    }
};
export default folderFileFetchReducer;