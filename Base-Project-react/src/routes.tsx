import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import Tab1 from "./components/tabcon/tab1";

import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWebsite />
    },
    {
        path: "/admin",
        element: <LayoutAdmin />,
    },
    {
        path: "/tab",
        element: <Tab1 />,
    },

]);