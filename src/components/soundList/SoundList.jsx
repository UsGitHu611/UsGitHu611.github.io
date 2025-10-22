import {SoundItem} from "../soundItem/SoundItem.jsx";
import styles from "./style.module.css";

export const SoundList = ({list}) => {
    return (
        <ul className={styles.list}>
            {list.map(({id, phrase, time, reference}, index) => (
                <SoundItem
                    key={id}
                    id={id}
                    phrase={phrase}
                    index={index}
                    reference={reference}
                    time={time}
                />
            ))}
        </ul>
    );
}