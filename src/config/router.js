import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";

const HOME = React.lazy(() => import("../pages/Home"));
const SKILL = React.lazy(() => import("../pages/Skill"));
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
        path: "*",
        element: <ERROR />
    },
])

export default router;