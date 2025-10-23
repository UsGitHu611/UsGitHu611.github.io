import styles from "./style.module.css";
import {useContext, useId} from "react";
import {Toggle} from "../../components/toggle/Toggle.jsx";
import {settingsContext} from "../../context/SettingsContext.jsx";


export default function Settings(){
    const id = useId();
    const {theme, toggleTheme} = useContext(settingsContext);
    return (
        <section className={styles.settingsSection}>
            <h1 className={styles.title}>
                Настройки
            </h1>

            <ul className={styles.settingsList}>
                <li>
                    <label
                        className={styles.label}
                        htmlFor={`${id}-transition`}
                    >
                        Анимации
                        <Toggle id={`${id}-transition`}/>
                    </label>
                </li>
                <li>
                    <label
                        className={styles.label}
                        htmlFor={`${id}-theme`}
                    >
                        Тема
                        <Toggle
                            id={`${id}-theme`}
                            isChecked={theme === "dark"}
                            dispatch={toggleTheme}
                        />
                    </label>
                </li>
            </ul>
        </section>
    )
}