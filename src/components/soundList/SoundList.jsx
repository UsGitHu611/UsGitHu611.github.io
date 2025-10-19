import {SoundItem} from "../soundItem/SoundItem.jsx";
import styles from "./style.module.css";
import {AudioProvider} from "../../context/AudioContext.jsx";

export const SoundList = ({list}) => {
    return (
        <ul className={styles.list}>
            <AudioProvider>
                {list.map(({id, phrase, time, reference}) => (
                    <SoundItem
                        key={id}
                        id={id}
                        phrase={phrase}
                        reference={reference}
                        time={time}
                    />
                ))}
            </AudioProvider>
        </ul>
    );
}