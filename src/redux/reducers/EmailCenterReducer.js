import {email} from "../utiles/initialStore";
import {
    SHOW_EMAIL,
    LOGGED_IN_EMAIL,
    GOOGLE_MAIL_AUTH,
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
    LIST_LABELS,
    CLEAR_LIST_LABELS,
    CLEAR_ALL_MAILS,
    CREATE_LABEL,
    SET_LABELS_ID,
    CLEAR_HOVER_EMAIL,
} from "../action/EmailCenter/actionType";
//
const EmailCenterReducer = (state = email, {type, payload}) => {
    switch (type) {
        case SHOW_EMAIL: {
            return {
                ...state, isShow: payload.isShow
            };
        }

        case HOVER_EMAIL: {
            return {
                ...state, hoverEmail: payload.item
            };
        }

        case CLEAR_HOVER_EMAIL: {
            return {
                ...state, hoverEmail: {}
            };
        }

        case SET_LABELS_ID: {
            return {
                ...state, labelIds: payload.labelId
            };
        }

        case CLEAR_THREAD_EMAIL: {
            return {
                ...state, threadMail: payload
            };
        }

        case CLEAR_LIST_LABELS: {
            return {
                ...state, listLabels: {}
            };
        }

        case CLEAR_ALL_MAILS: {
            return {
                ...state, mails: {}
            };
        }

        case VIEW_EMAIL: {
            return {
                ...state, viewEmail: payload.viewEmail
            };
        }

        case `${LOGGED_IN_EMAIL}_SUCCESS`: {
            return {
                ...state, emailLogin: payload
            };
        }

        case `${GET_USER_LOGGED_EMAIL}_SUCCESS`: {
            return {
                ...state, loggedEmail: payload
            };
        }

        case `${GMAIL_GET_TOKEN}_SUCCESS`: {
            window.location.replace("/email-center?success=true");
            return {
                ...state, authCode: payload
            };
        }

        case `${GET_MESSAGE_BY_LABEL_IDS}_SUCCESS`: {
            return {
                ...state, mails: payload
            };
        }

        case `${GET_THREAD_BY_ID}_SUCCESS`: {
            return {
                ...state, threadMail: payload
            };
        }

        case `${CREATE_LABEL}_SUCCESS`: {
            return {
                ...state, createLabel: payload
            };
        }

        case `${LIST_LABELS}_SUCCESS`: {
            return {
                ...state, listLabels: payload
            };
        }

        case `${PREVIEW_EMAIL}_SUCCESS`: {
            return {
                ...state, previewEmail: payload
            };
        }

        case `${SELECTED_EMAIL}`: {
            return {
                ...state, selectedEmail: payload
            };
        }

        case `${GOOGLE_MAIL_AUTH}_SUCCESS`: {
            window.location.replace(payload.URL);
            return {
                ...state, googleMail: payload
            };
        }

        case `${GET_TOTAL_MESSAGE}_SUCCESS`: {
            return {
                ...state, totalMessages: payload
            };
        }
        default:
            return state;
    }
};

export default EmailCenterReducer;
