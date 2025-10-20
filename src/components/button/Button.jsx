import styles from "./style.module.css";
import {useContext} from "react";
import {audioContext} from "../../context/AudioContext.jsx";
import {AVAILABLE_COLORS} from "../../assets/js/constants.js";

export const Button = ({time, reference, index}) => {
    const playFromTime = useContext(audioContext);
    const clickHandler = () => {
        playFromTime(time, reference);
    };

    return (
        <button
            className={styles.button}
            style={{"--bg-before": AVAILABLE_COLORS[index % AVAILABLE_COLORS.length]}}
            onClick={clickHandler}
        />
    );
}