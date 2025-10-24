import {SoundItem} from "../soundItem/SoundItem.jsx";
import styles from "./style.module.css";
import {useContext} from "react";
import {searchContext} from "../../context/SearchContext.jsx";

export const SoundList = () => {
    const {resultList} = useContext(searchContext);
    return (
        <ul className={styles.list}>
            {resultList?.map((item, index) => (
                <SoundItem
                    key={item.id}
                    index={index}
                    {...item}
                />
            ))}
        </ul>
    );
}