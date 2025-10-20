import {DubbingItem} from "../dubbingItem/DubbingItem.jsx";
import styles from "./style.module.css";

export const DubbingList = ({list}) => {
    return (
        <ul className={styles.list}>
            {list.map((item, index) => (
                <DubbingItem
                    key={item.id}
                    index={index % list.length}
                    {...item}
                />
            ))}
        </ul>
    );
}