import styles from "./style.module.css";
import {Icon} from "../icon/Icon.jsx";

export const Toggle = ({id, dispatch, isChecked, className}) => {
    return (
        <div className={`${styles.wrapperCheckbox} ${styles[className] || ""}`}>
            {className === "themeToggle" && (
                Array.from({length: isChecked ? 4 : 2}).map((_, i) => (
                    <Icon
                        key={i}
                        url={isChecked ? "star" : "cloud"}
                    />
                ))
            )}
            <input
                id={id}
                className={styles.checkbox}
                checked={isChecked}
                onChange={dispatch}
                type="checkbox"
                role="switch"
                aria-checked={isChecked}
            />
        </div>
    )
}