import { combineReducers } from "redux";

import layoutReducer from "./layoutReducer";
import loaderReducer from "./loaderReducer";
import EmailCenterReducer from "./EmailCenterReducer";
import { TableReducer } from "./tableReducer";

const RootReducer = combineReducers({
  layout: layoutReducer,
  loader: loaderReducer,
  emailCenter: EmailCenterReducer,
  table: TableReducer,
});

export type RootReducerType = typeof RootReducer;

export default RootReducer;
