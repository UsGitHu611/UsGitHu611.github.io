import {useEffect, useState} from "react";

export const useMessage = (callback) => {
    const [showMessage, setShowMessage] = useState(false);
    const messageHandler = () => {
        if (showMessage) return;
        setShowMessage(true);
        callback();
    }

    useEffect(() => {
        if (!showMessage) return;
        const timer = setTimeout(() => setShowMessage(false), 2500);
        return () => clearTimeout(timer);
    }, [showMessage]);

    return {
        messageHandler,
        showMessage
    }
}