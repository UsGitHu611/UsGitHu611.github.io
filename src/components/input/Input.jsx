import styles from "./style.module.css";
import {useContext, useEffect, useId, useState} from "react";
import {useDebounce} from "../../assets/hook/useDebounce.js";
import {searchContext} from "../../context/SearchContext.jsx";
import {Icon} from "../icon/Icon.jsx";

export const Input = ({ref}) => {
    const [value, setValue] = useState("");
    const context = useContext(searchContext);
    const debounceValue = useDebounce(value, 400);
    const id = useId();

    useEffect(() => {
        context?.setInputValue(debounceValue);
    }, [debounceValue]);

    return (
        <div className={styles.inputWrapper}>
            <input
                id={id}
                className={styles.input}
                value={value}
                ref={ref}
                onChange={(e) => setValue(e.currentTarget.value)}
                placeholder="Название звука"
                type="text"
            />
            <label className={styles.labelIcon} htmlFor={id}>
                <Icon url="/icons/search.svg"/>
            </label>
        </div>
    );
}