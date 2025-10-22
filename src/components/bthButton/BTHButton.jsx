import styles from "./styles.module.css";
import {useNavigate} from "react-router";

export const BTHButton = () => {
    const navigate = useNavigate();
    return (
        <button className={styles.bth} onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem"
                 viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"/>
            </svg>
        </button>
    )
}