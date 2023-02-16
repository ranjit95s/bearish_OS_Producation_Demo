import {
    SHOW_EMAIL,
    LOGGED_IN_EMAIL,
    GOOGLE_MAIL_AUTH,
    GET_OUTLOOK_MAIL,
    GMAIL_GET_TOKEN,
    GET_MESSAGE_BY_LABEL_IDS,
    GET_THREAD_BY_ID,
    PREVIEW_EMAIL,
    SELECTED_EMAIL,
    GET_USER_LOGGED_EMAIL,
    HOVER_EMAIL,
    VIEW_EMAIL,
    CLEAR_THREAD_EMAIL,
    GET_TOTAL_MESSAGE,
    SEND_MAIL,
    MARK_AS_READ,
    TRASH_MESSAGE_BY_ID,
    LIST_LABELS,
    CLEAR_LIST_LABELS,
    CLEAR_ALL_MAILS,
    CREATE_LABEL,
    STARRED_MESSAGE,
    SET_LABELS_ID,
    CLEAR_HOVER_EMAIL
} from "./actionType";

export const previewEmail = () => ({
    type: PREVIEW_EMAIL,
});

export const hoverEmail = (payload) => ({
    type: HOVER_EMAIL,
    payload
});

export const clearHoverEmail = () => ({
    type: CLEAR_HOVER_EMAIL,
});

export const clearThreadEmail = (payload) => ({
    type: CLEAR_THREAD_EMAIL,
    payload
});

export const setLabelIds = (payload) => ({
    type: SET_LABELS_ID,
    payload
});

export const viewEmail = (payload) => ({
    type: VIEW_EMAIL,
    payload
});

export const clearAllMails = () => ({
    type: CLEAR_ALL_MAILS
});

export const showEmail = ({isShow}) => ({
    type: SHOW_EMAIL,
    payload: {isShow}
});

export const clearListLabels = () => ({
    type: CLEAR_LIST_LABELS,
});

export const selectedEmail = (payload) => ({
    type: SELECTED_EMAIL,
    payload
});

export const loggedInEmail = (payload) => ({
    type: LOGGED_IN_EMAIL,
    payload,
    method: 'POST',
    url: 'common/loggedInEmail',
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const createLabel = (payload) => ({
    type: CREATE_LABEL,
    payload,
    method: 'POST',
    url: 'gmail/createLabel',
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const starredMessage = (payload) => ({
    type: STARRED_MESSAGE,
    payload,
    url: `gmail/starredMessage/${payload.id}/${payload.email}`,
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const getTotalMessages = (payload) => ({
    type: GET_TOTAL_MESSAGE,
    payload,
    url: `gmail/getTotalMessages/${payload.type}/50/${payload.email}`,
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const markAsRead = (payload) => ({
    type: MARK_AS_READ,
    payload,
    url: `gmail/markAsRead/${payload.id}/${payload.email}`,
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const trashMessageById = (payload) => ({
    type: TRASH_MESSAGE_BY_ID,
    payload,
    url: `gmail/trashMessageById/${payload.id}/${payload.email}`,
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const getUserLoggedEmail = (payload) => ({
    type: GET_USER_LOGGED_EMAIL,
    payload,
    method: 'POST',
    url: 'common/loggedInEmail',
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const listLabels = (payload) => ({
    type: LIST_LABELS,
    payload,
    url: `gmail/listLabels/${payload.email}`,
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const googleMailAuth = (payload) => ({
    type: GOOGLE_MAIL_AUTH,
    payload,
    method: 'POST',
    url: 'gmail/authLogin',
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const getToken = (payload) => ({
    type: GMAIL_GET_TOKEN,
    payload,
    method: 'POST',
    url: 'gmail/getToken',
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const fetchMessagesByLabelIds = (payload) => ({
    type: GET_MESSAGE_BY_LABEL_IDS,
    payload,
    method: 'POST',
    url: `gmail/fetchMessagesByLabelIds?page=${payload.page}&perPage=${payload.perPage}`,
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const getThreadById = (payload) => ({
    type: GET_THREAD_BY_ID,
    payload,
    url: `gmail/getThreadById/${payload.threadId}/${payload.email}`,
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const sendMail = (payload) => ({
    type: SEND_MAIL,
    payload,
    url: `gmail/sendMail/${payload.email}`,
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});

export const getOutlookMails = (payload) => ({
    type: GET_OUTLOOK_MAIL,
    payload,
    method: 'POST',
    url: 'outlook/getMails',
    axiosService: true,
    toaster: {
        loading: false,
        success: false,
        error: true,
    }
});
