import {Button} from "../button/Button.jsx";
import styles from "./style.module.css";

export const SoundItem = ({phrase, time, id, reference}) => {
    return (
        <li className={styles.item}>
            <Button time={time} id={id} reference={reference}/>
            <q className={styles.phrase}>{phrase}</q>
        </li>
    );
}