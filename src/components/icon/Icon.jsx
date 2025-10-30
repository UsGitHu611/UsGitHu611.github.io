import styles from "./style.module.css";

export const Icon = ({url, style}) => {
    return (
        <i
            className={styles.icon}
            style={{
                WebkitMaskImage: `url(/icons/${url}.svg)`,
                maskImage: `url(/icons/${url}.svg)`,
                ...style
            }}
        ></i>
    )
}