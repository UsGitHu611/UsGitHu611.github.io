import styles from "./style.module.css";
import {randomColor} from "../../assets/js/helper.js";
import {useContext} from "react";
import {audioContext} from "../../context/AudioContext.jsx";

export const Button = ({time, reference}) => {
    const playFromTime = useContext(audioContext);

    const clickHandler = () => {
        playFromTime(time, reference);
    };

    return (
        <button
            className={styles.button}
            style={{"--bg-random": randomColor(100)}}
            onClick={clickHandler}
        />
    );
}