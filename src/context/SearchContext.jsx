import {createContext, useMemo, useState} from "react";

export const searchContext = createContext(null);
const SSearchProvider = searchContext.Provider;

export const SearchProvider = ({children, list = []}) => {
    const [inputValue, setInputValue] = useState("");

    const resultList = useMemo(() => {
        if (!inputValue.trim()) {
            return list;
        }
        const searchTerm = inputValue.toLowerCase().trim();
        return list.filter(({phrase}) =>
            phrase.toLowerCase().includes(searchTerm)
        );
    }, [list, inputValue]);

    const contextValue = useMemo(() => ({
        resultList,
        setInputValue
    }), [resultList]);

    return (
        <SSearchProvider value={contextValue}>
            {children}
        </SSearchProvider>
    )
}