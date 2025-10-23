import {createContext, useCallback, useEffect, useState} from "react";

export const settingsContext = createContext(null);
const SSettingsProvider = settingsContext.Provider;

export const SettingsProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.style.colorScheme = savedTheme;
        document.documentElement.setAttribute("data-color-scheme", savedTheme);
    }, [])

    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.style.colorScheme = newTheme;
        document.documentElement.setAttribute("data-color-scheme", newTheme);
    }, [theme]);

    return (
        <SSettingsProvider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </SSettingsProvider>
    );
}