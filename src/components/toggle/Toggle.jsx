import styles from "./style.module.css";

export const Toggle = ({id, dispatch, isChecked}) => {
    return (
        <div className={styles.wrapperCheckbox}>
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