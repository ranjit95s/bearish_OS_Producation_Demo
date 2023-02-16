import {isBoolean} from "../../Utiles";

export const user = {};
export const email = {isShow: false};

export const apiResponses = [];

export const loader = {
    array: [],
};

export const layout = {
    drawer: {
        isOpen: isBoolean(JSON.parse(localStorage.getItem('drawerIsOpen'))) ? JSON.parse(localStorage.getItem('drawerIsOpen')) : true,
        isNarrow: isBoolean(JSON.parse(localStorage.getItem('drawerIsNarrow'))) ? JSON.parse(localStorage.getItem('drawerIsNarrow')) : false,
    }
};
