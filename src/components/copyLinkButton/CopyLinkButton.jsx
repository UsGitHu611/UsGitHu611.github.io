import styles from "./style.module.css";
import {useEffect, useState} from "react";
import {Message} from "../message/Message.jsx";

export const CopyLinkButton = ({time, reference, slug}) => {
    const [showMessage, setShowMessage] = useState(false);
    const copyLinkHandler = async () => {
        if (showMessage) return;
        setShowMessage(true);
        const urlWithTimeCode = `${location.host}#/player?reference=${reference}&time=${time}&phrase=${slug}`;
        await navigator.clipboard.writeText(urlWithTimeCode);
    }

    useEffect(() => {
        if (!showMessage) return;
        const timer = setTimeout(() => setShowMessage(false), 2500);
        return () => clearTimeout(timer);
    }, [showMessage]);

    return (
        <>
            <button
                className={styles.copyLink}
                title="Копировать URL"
                onClick={copyLinkHandler}
            >
            </button>
            {
                showMessage
                    ? <Message
                        message="Скопированно! &#128515;"
                        showMessage={showMessage}
                    />
                    : null
            }
        </>
    )
}