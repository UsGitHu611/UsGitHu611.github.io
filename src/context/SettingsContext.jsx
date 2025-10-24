import {createContext, useCallback, useEffect, useState} from "react";

export const settingsContext = createContext(null);
const SSettingsProvider = settingsContext.Provider;

export const SettingsProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const [isAllowTransition, setIsAllowTransition] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        const savedTransition = localStorage.getItem("is_allow_transition");
        const isAllowViewTransition = savedTransition === null ? true : savedTransition === "true";
        setTheme(savedTheme);
        setIsAllowTransition(isAllowViewTransition);
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

    const toggleViewTransition = useCallback(() => {
        setIsAllowTransition(prev => {
            const newValue = !prev;
            localStorage.setItem("is_allow_transition", String(newValue));
            return newValue;
        });
    }, [isAllowTransition])

    return (
        <SSettingsProvider value={{
            theme,
            toggleTheme,
            isAllowTransition,
            toggleViewTransition
        }}>
            {children}
        </SSettingsProvider>
    );
}