import {LOADER_START, LOADER_STOP} from "./actionType";

export const loaderStart = ({id}) => ({
    type: LOADER_START,
    payload: {id}
});

export const loaderStop = ({id}) => ({
    type: LOADER_STOP,
    payload: {id}
});
