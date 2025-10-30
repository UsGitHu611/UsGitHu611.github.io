import styles from "./style.module.css";
import {PlayButton} from "../../components/playButton/PlayButton.jsx";

export default function Player() {
    return (
        <section className={styles.playerSection}>
            <PlayButton />
        </section>
    )
}