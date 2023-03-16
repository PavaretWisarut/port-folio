import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";

// import HOME from "../pages/Home"
const HOME = React.lazy(() => import("../pages/Home"));
const SKILL = React.lazy(() => import("../pages/Skill"));
const CONTACT = React.lazy(() => import("../pages/Contact"));
const EXP = React.lazy(() => import("../pages/Experience"));
const ERROR = React.lazy(() => import("../pages/Error"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <HOME />
    },
    {
        path: "/skill",
        element: <SKILL />
    },
    {
        path: "/contact",
        element: <CONTACT />
    },
    {
        path: "/experience",
        element: <EXP />
    },
    {
        path: "*",
        element: <ERROR />
    },
])

export default router;