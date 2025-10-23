import styles from "./style.module.css";
import {useSearchParams} from "react-router";
import {useContext} from "react";
import {audioContext} from "../../context/AudioContext.jsx";

export default function Player() {
    const [searchParams, _] = useSearchParams();
    const reference = searchParams.get("reference");
    const time = searchParams.get("time");
    const phrase = searchParams.get("phrase");
    const playFromTime = useContext(audioContext);

    const playAudioHandler = () => {
        playFromTime(time, reference);
    }

    return (
        <section className={styles.playerSection}>
            <h1 className={styles.title}>{phrase}</h1>
            <button className={styles.button} onClick={playAudioHandler}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem"
                     viewBox="0 0 24 24">
                    <path fill="currentColor" d="M8 5v14l11-7z"/>
                </svg>
            </button>
        </section>
    )
}