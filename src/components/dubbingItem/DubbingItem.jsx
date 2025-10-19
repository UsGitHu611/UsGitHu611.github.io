import styles from "./style.module.css";
import {randomColor} from "../../assets/js/helper.js";
import {Link} from "react-router";

export const DubbingItem = ({label, id, styleLogo, list}) => {

    return (
        <li
            className={styles.item}
            id={"dd" + id}
            style={{
                "--bg-current": randomColor(),
                viewTransitionName: `item-${id}`
            }}
        ><Link
            className={styles.link}
            state={{
                label,
                styleLogo,
                list
            }}
            to={`/${id}`}
            viewTransition
        >
            <p style={{viewTransitionName: `title-${id}`}}>{label}</p>
        </Link>
        </li>
    );
}