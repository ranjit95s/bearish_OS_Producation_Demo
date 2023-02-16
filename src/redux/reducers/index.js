import layoutReducer from "./layoutReducer";
import loaderReducer from "./loaderReducer";
import EmailCenterReducer from "./EmailCenterReducer";
import authReducer from "./authReducer";
import folderFetchReducer from "./folderFetchReducer";
const reducer = {
    layout: layoutReducer,
    loader: loaderReducer,
    emailCenter: EmailCenterReducer,
    auth: authReducer,
    getFolder : folderFetchReducer
};

export default reducer;
