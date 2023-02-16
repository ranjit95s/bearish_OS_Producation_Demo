import axios from "axios";
import getAuthHeaders from "./apiCall";

export const HttpsAction = async ({
    method = "GET",
    url = "",
    data = {},
    headers = {},
    positiveCallBack = e => e,
    negativeCallBack = e => e,
    finallyCallBack = e => e,
}) => {
    try {
        url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}${url}`;
        headers = { ...headers, ...(getAuthHeaders()) };
        return await axios({
            method,
            url,
            data,
            headers
        }).then(async response => await positiveCallBack(response))
    } catch (e) {
        if (e.response?.status === 401) {
            Object.keys(localStorage).forEach(key => { if (key !== "welcome") localStorage.removeItem(key) });
            window.location.href = "/";
        }
        return await negativeCallBack(e)
    } finally {
        await finallyCallBack()
    }
};