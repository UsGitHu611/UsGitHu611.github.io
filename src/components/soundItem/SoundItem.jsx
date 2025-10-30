import {Button} from "../button/Button.jsx";
import styles from "./style.module.css";
import {SoundButton} from "../soundButton/SoundButton.jsx";
import {useSound} from "../../assets/hook/useSound.js";
import {CopyLinkButton} from "../copyLinkButton/CopyLinkButton.jsx";
import {FavoritesButton} from "../favoritesButton/FavoritesButton.jsx";

export const SoundItem = ({phrase, time, id, reference, index, slug, ref}) => {
    const {playAudioHandler} = useSound({reserveTime: time, reserveReference: reference});
    return (
        <li className={styles.item} ref={ref}>
            <Button
                time={time}
                id={id}
                reference={reference}
                index={index}
                firstSymbol={phrase[0]}
            />
            <q className={styles.phrase} title={phrase}>
                {phrase}
            </q>
            <div className={styles.info}>
                <CopyLinkButton
                    linkData={{reference, time, slug}}
                />
                <SoundButton
                    onClick={playAudioHandler}
                    title="Играть"
                    icon="play"
                />
                <FavoritesButton
                    favoritesSoundId={id}
                    favoritesReference={reference}
                />
            </div>
        </li>
    );
}