import {Outlet} from "react-router";
import {Header} from "./components/header/Header.jsx";
import {SettingsProvider} from "./context/SettingsContext.jsx";

export const App = () => {
    return (
        <SettingsProvider>
            <Header/>
            <Outlet/>
        </SettingsProvider>
    );
}
