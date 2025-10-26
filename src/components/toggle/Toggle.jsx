import styles from "./style.module.css";
import {Icon} from "../icon/Icon.jsx";

export const Toggle = ({id, dispatch, isChecked, className}) => {
    return (
        <div className={`${styles.wrapperCheckbox} ${styles[className] || ""}`}>
            {className !== "themeToggle"
                ? null
                : isChecked ? (
                    <>
                        <Icon url="/icons/star.svg"/>
                        <Icon url="/icons/star.svg"/>
                        <Icon url="/icons/star.svg"/>
                        <Icon url="/icons/star.svg"/>
                    </>
                ) : (
                    <>
                        <Icon url="/icons/cloud.svg"/>
                        <Icon url="/icons/cloud.svg"/>
                    </>
                )
            }
            <input
                id={id}
                className={styles.checkbox}
                checked={isChecked}
                onChange={dispatch}
                type="checkbox"
            />
        </div>
    )
}