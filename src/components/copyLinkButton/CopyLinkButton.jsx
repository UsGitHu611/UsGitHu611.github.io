import styles from "./style.module.css";

export const CopyLinkButton = ({time, reference, phrase}) => {
    const copyLinkHandler =  async () => {
        const urlWithTimeCode = `${location.host}#/player?reference=${reference}&time=${time}&phrase=${phrase}`;
        await navigator.clipboard.writeText(urlWithTimeCode);
    }
    return (
        <button
            className={styles.copyLink}
            title="Копировать URL"
            onClick={copyLinkHandler}
        >
        </button>
    )
}