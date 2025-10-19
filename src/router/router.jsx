import { createBrowserRouter } from "react-router";
import {App} from "../App.jsx";
import {Main} from "../pages/main/Main.jsx";
import {DubbingSounds} from "../pages/dubbingSounds/DubbingSounds.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Main/>
            },
            {
                path: ":id",
                element: <DubbingSounds/>
            }
        ]
    }
]);