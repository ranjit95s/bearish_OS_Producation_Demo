import {
    FETCHING_FOLDER
} from "../action/actionType";

const initialState = {
    isFetching: false,
    errorMessage: "",
    latestFOLDER: []
};

const folderFetchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case `${FETCHING_FOLDER}_ERROR`:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            };
        case `${FETCHING_FOLDER}_FETCHING`:
            return {
                ...state,
                isFetching: false,
                latestFOLDER: payload.folders
            };
        default:
            return state;
    }
};
export default folderFetchReducer;