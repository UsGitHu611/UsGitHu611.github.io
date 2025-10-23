import {useLocation, useParams} from "react-router";
import styles from "./style.module.css";
import {FONT_DICT} from "../../assets/js/constants.js";
import {SoundList} from "../../components/soundList/SoundList.jsx";
import {AudioProvider} from "../../context/AudioContext.jsx";

export const DubbingSounds = () => {
    const {id} = useParams();
    const {state} = useLocation();
    return (
        <section
            className={styles.dubPage}
            style={{
                viewTransitionName: `item-${id}`
            }}
        >
            <AudioProvider>
            <h1
                className={styles.title}
                style={{
                    fontFamily: `var(${FONT_DICT[id]})`,
                    ...state.styleLogo
                }}
            >
                {state.label}
            </h1>
            <SoundList list={state.list} />
            </AudioProvider>
        </section>
    );
}