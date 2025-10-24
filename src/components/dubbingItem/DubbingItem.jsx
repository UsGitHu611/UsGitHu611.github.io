import styles from "./style.module.css";
import {Link} from "react-router";
import {AVAILABLE_COLORS} from "../../assets/js/constants.js";
import {useContext} from "react";
import {settingsContext} from "../../context/SettingsContext.jsx";

export const DubbingItem = ({label, id, styleLogo, list, index}) => {
    const {isAllowTransition} = useContext(settingsContext);
    return (
        <li
            className={styles.item}
            id={"dd" + id}
            style={{
                backgroundColor: AVAILABLE_COLORS[index],
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
            viewTransition={isAllowTransition}
        >
            <p style={{viewTransitionName: `title-${id}`}}>{label}</p>
        </Link>
        </li>
    );
}