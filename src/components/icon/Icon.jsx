import styles from "./style.module.css";

export const Icon = ({url}) => {
    return (
        <i
            className={styles.icon}
            style={{
                WebkitMaskImage: `url(${url})`,
                maskImage: `url(${url})`
            }}
        ></i>
    )
}