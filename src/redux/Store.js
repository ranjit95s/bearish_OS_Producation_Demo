import {configureStore} from '@reduxjs/toolkit';

import reducer from "./reducers";
import middleware from "./middleware";
import rootState from "./utiles/rootState";

export default configureStore({
    reducer,
    middleware,
    initialState: rootState
});
