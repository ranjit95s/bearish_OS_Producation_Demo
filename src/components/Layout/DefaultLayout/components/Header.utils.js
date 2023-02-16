import DashBoard from "./Navbar/DashBoard"
import Workspace from "./Navbar/WorkSpace/Workspace"
import Default from "./Navbar/Default";

export const NAVBAR = [
    {
        path: "dashboard",
        component: DashBoard
    },
    {
        path: "workspace",
        component: Workspace
    },
    {
        path: "cloud-drives",
        component: Workspace
    },
    {
        path: "",
        component: Default
    },
]
