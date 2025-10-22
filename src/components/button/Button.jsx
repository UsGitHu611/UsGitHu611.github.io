import styles from "./style.module.css";
import {useContext} from "react";
import {audioContext} from "../../context/AudioContext.jsx";
import {AVAILABLE_COLORS} from "../../assets/js/constants.js";

export const Button = ({time, reference, index, firstSymbol}) => {
    const playFromTime = useContext(audioContext);
    const clickHandler = () => {
        playFromTime(time, reference);
    };

    return (
        <button
            className={styles.button}
            data-first-symbol={firstSymbol}
            style={{"--bg-color": AVAILABLE_COLORS[index % AVAILABLE_COLORS.length]}}
            onClick={clickHandler}
        />
    );
}