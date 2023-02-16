import {AccountCircle, Logout, Notifications, Settings} from "@mui/icons-material";
// import notification from "../../../../Images/Bearish/notification.svg";
// import calendar from "../../../../Images/Bearish/calendar.svg";

const defaultFunction = () => {
}

export const NAVIGATION_MENU_LIST = ({onSettingClickHandler}) => [
    {
        icon: Notifications,
        visibleOnMobile: false,
        onClickHandler: defaultFunction,
        color: "inherit",
        badge: 0,
    },
    {
        icon: Settings,
        visibleOnMobile: true,
        onClickHandler: onSettingClickHandler || defaultFunction,
        color: "inherit",
        badge: 0,
    }
];

export const MENU_LIST = ({onProfileClickHandler, onLogoutClickHandler}) => [
    {
        value: 'Profile',
        icon: AccountCircle,
        onClickHandler: onProfileClickHandler || defaultFunction,
    },
    {
        value: 'Logout',
        icon: Logout,
        onClickHandler: onLogoutClickHandler || defaultFunction,
    }
];
