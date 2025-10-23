import {Button} from "../button/Button.jsx";
import styles from "./style.module.css";
import {CopyLinkButton} from "../copyLinkButton/CopyLinkButton.jsx";

export const SoundItem = ({phrase, time, id, reference, index}) => {
    return (
        <li className={styles.item}>
            <Button
                time={time}
                id={id}
                reference={reference}
                index={index}
                firstSymbol={phrase[0]}
            />
            <div className={styles.info}>
                <q className={styles.phrase} title={phrase}>
                    {phrase}
                </q>
                <CopyLinkButton
                    time={time}
                    reference={reference}
                    phrase={phrase}
                />
            </div>
        </li>
    );
}