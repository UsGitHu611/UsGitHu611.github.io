import {SoundItem} from "../soundItem/SoundItem.jsx";
import styles from "./style.module.css";
import {useContext} from "react";
import {searchContext} from "../../context/SearchContext.jsx";

export const SoundList = () => {
    const {resultList} = useContext(searchContext);
    return (
        <ul className={styles.list}>
            {resultList?.map(({id, phrase, time, reference}, index) => (
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