import {configureStore} from '@reduxjs/toolkit';

import RootReducer from "./reducers";
import middleware from "./middleware";
import rootState from "./utiles/rootState";

const store = configureStore({
    reducer: RootReducer,
    middleware,
    preloadedState: rootState
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
