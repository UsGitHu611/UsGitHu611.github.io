import styles from "./style.module.css";
import {Link} from "react-router";
import {Icon} from "../icon/Icon.jsx";
import {useContext} from "react";
import {settingsContext} from "../../context/SettingsContext.jsx";

const headerItems = [
    {
        id: "home",
        href: "/",
        icon: "/icons/home.svg"
    },
    {
        id: "settings",
        href: "/settings",
        icon: "/icons/settings.svg"
    }
];

export const Header = () => {
    const {isAllowTransition} = useContext(settingsContext);
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.headerNavList}>
                    {headerItems.map(({id, href, icon}) => (
                        <li className={styles.headerItem} key={id} title={id}>
                            <Link
                                className={styles.headerLink}
                                aria-label={id}
                                to={href}
                                viewTransition={isAllowTransition}
                            >
                                <Icon url={icon}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}