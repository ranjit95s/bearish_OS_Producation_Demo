import {LOGIN} from "./actionType";

export const login = (payload) => ({
    type: LOGIN,
    method: 'POST',
    url: 'authentication/login',
    axiosService: true,
    payload
});

