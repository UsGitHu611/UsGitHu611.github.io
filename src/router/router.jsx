import { createHashRouter } from "react-router";
import {App} from "../App.jsx";
import {Main} from "../pages/main/Main.jsx";
import {DubbingSounds} from "../pages/dubbingSounds/DubbingSounds.jsx";
import {AudioProvider} from "../context/AudioContext.jsx";
import {lazy} from "react";

const Player = lazy(() => import("../pages/player/Player.jsx"));

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
            },
            {
                path:"/player",
                element: (
                    <AudioProvider>
                        <Player/>
                    </AudioProvider>
                )
            }
        ]
    }
]);