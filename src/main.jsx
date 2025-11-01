import "./assets/style/reset.css";
import "./assets/style/fonts.css";
import "./assets/style/variables.css";
import "./assets/style/global.css";
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router/dom";
import {router} from "./router/router.jsx";
import {preload} from "react-dom";

preload("/fonts/BaronKuffner.woff2", {as: "font", type: "font/woff2"});
preload("/fonts/Tiny5.woff2", {as: "font", type: "font/woff2"});
preload("/fonts/Anklepants.woff2", {as: "font", type: "font/woff2"});

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
