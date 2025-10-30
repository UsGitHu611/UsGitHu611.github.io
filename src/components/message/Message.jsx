import styles from "./style.module.css";
import {createPortal} from "react-dom";

export const Message = ({message, showMessage}) => {
    return showMessage ? createPortal(
        <div
            className={styles.message}
            data-show={showMessage}
        >
            <p className={styles.messageText}>
                {message}
            </p>
        </div>,
        document.body
    ) : null;
}