import {auth} from "../utiles/initialStore";
import {LOGIN} from "../action/Auth/actionType";

const authReducer = (state = auth, {type, payload}) => {
    switch (type) {
        /** Login */
        case `${LOGIN}_SUCCESS`: {
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isLoggedIn: true
            };
        }
        default:
            return state;
    }
};

export default authReducer;
