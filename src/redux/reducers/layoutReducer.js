import {layout} from "../utiles/initialStore";
import {SWITCH_DRAWER_MODE, SWITCH_DRAWER_NARROW_MODE} from "../action/Layout/actionType";

const layoutReducer = (state = layout, {type}) => {
    switch (type) {
        case SWITCH_DRAWER_MODE: {
            localStorage.setItem('drawerIsOpen', !state.drawer.isOpen);
            return {
                ...state, drawer: {
                    ...state.drawer, isOpen: !state.drawer.isOpen
                },
            };
        }
        case SWITCH_DRAWER_NARROW_MODE: {
            localStorage.setItem('drawerIsNarrow', !state.drawer.isNarrow);
            return {
                ...state, drawer: {
                    ...state.drawer, isNarrow: !state.drawer.isNarrow
                }
            };
        }
        default:
            return state;
    }
};

export default layoutReducer;
