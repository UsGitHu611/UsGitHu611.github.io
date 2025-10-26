import "./assets/style/reset.css";
import "./assets/style/fonts.css";
import "./assets/style/variables.css";
import "./assets/style/global.css";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import {router} from "./router/router.jsx";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
