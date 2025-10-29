import {Button} from "../button/Button.jsx";
import styles from "./style.module.css";
import {CopyLinkButton} from "../copyLinkButton/CopyLinkButton.jsx";

export const SoundItem = ({phrase, time, id, reference, index, slug, ref}) => {
    return (
        <li className={styles.item} ref={ref}>
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
                    slug={slug}
                />
            </div>
        </li>
    );
}