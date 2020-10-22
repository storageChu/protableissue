import Home from "./components/home/home"
import Login from "./components/login"
import Dashboard from "./components/home/dashboard/dashboard"
import ProjectDashboard from "./components/project/dashboard/dashboard"
import Requirement from "./components/project/requirement/requirement"
import Displayboard from "./components/project/display_board/display_board"

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: "/dashboard",
                exact:true,
                component: Dashboard
            },
            {
                path: "/product/:id/dashboard",
                component: ProjectDashboard
            },
            {
                path: "/product/:id/requirement",
                component: Requirement
            },
            {
                path: "/product/:id/displayboard",
                component: Displayboard
            }               
        ]
    },
    {
        path: '/login',
        component: Login,
    }
];

export { routes }