import {loader} from "../utiles/initialStore";
import {LOADER_START, LOADER_STOP} from "../action/Loader/actionType";

const loaderReducer = (state = loader, {type, payload}) => {
    switch (type) {
        case LOADER_START:
            return {
                ...state,
                array: [...state.array, payload.id],
            };
        case LOADER_STOP:
            return {
                ...state,
                array: state.array.filter(i => i !== payload.id),
            };
        default:
            return state;
    }
};

export default loaderReducer;
