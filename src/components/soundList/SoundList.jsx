import {SoundItem} from "../soundItem/SoundItem.jsx";
import styles from "./style.module.css";
import {InfiniteScroll} from "../infiniteScroll/InfiniteScroll.jsx";

export const SoundList = () => {
    return (
        <InfiniteScroll
            className={styles.list}
        >
            {(item, index, liRef) => (
                <SoundItem
                    key={item.id}
                    index={index}
                    ref={liRef}
                    {...item}
                />
            )}
        </InfiniteScroll>
    );
}