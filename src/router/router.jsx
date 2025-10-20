import { createHashRouter } from "react-router";
import {App} from "../App.jsx";
import {Main} from "../pages/main/Main.jsx";
import {DubbingSounds} from "../pages/dubbingSounds/DubbingSounds.jsx";

export const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                index: true,
                element: <Main/>
            },
            {
                path: ":id",
                element: <DubbingSounds/>
            }
        ]
    }
]);