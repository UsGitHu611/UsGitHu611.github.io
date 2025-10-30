import styles from "./style.module.css";
import {Icon} from "../icon/Icon.jsx";

export const SoundButton =
    ({children, title, icon, onClick, symbol, active}) => {
    return (
        <>
            <button
                className={styles.soundButton}
                title={title}
                onClick={onClick}
                style={{color: active ? "var(--active-button)": ""}}
            >
                {icon ? <Icon url={icon}/> : symbol}
            </button>
            {children}
        </>
    );
}