import styles from "./style.module.css";
import {useContext, useId} from "react";
import {Toggle} from "../../components/toggle/Toggle.jsx";
import {settingsContext} from "../../context/SettingsContext.jsx";

export default function Settings(){
    const id = useId();
    const {
        theme,
        toggleTheme,
        isAllowTransition,
        toggleViewTransition
    } = useContext(settingsContext);
    return (
        <section className={styles.settingsSection}>
            <h1 className={styles.title}>
                Настройки
            </h1>
            <ul className={styles.settingsList}>
                <li className={styles.settingItem}>
                    <h4 className={styles.subtitleSettings}>
                        Персонализация 🎨
                    </h4>
                    <label
                        className={styles.label}
                        htmlFor={`${id}-transition`}
                    >
                        Анимации
                        <Toggle
                            id={`${id}-transition`}
                            isChecked={isAllowTransition}
                            dispatch={toggleViewTransition}
                        />
                    </label>
                    <label
                        className={styles.label}
                        htmlFor={`${id}-theme`}
                    >
                        Тема
                        <Toggle
                            id={`${id}-theme`}
                            isChecked={theme === "dark"}
                            className="themeToggle"
                            dispatch={toggleTheme}
                        />
                    </label>
                </li>
            </ul>
        </section>
    )
}