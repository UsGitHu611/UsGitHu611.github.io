import styles from "./style.module.css";
import {DubbingList} from "../../components/dubbingList/DubbingList.jsx";
import dubbing from "../../dubbing.json" with {type: "json"}

export const Main = () => {
    return (
        <section className={styles.main}>
            <DubbingList list={dubbing}/>
        </section>
    );
}