import {useLocation, useParams} from "react-router";
import styles from "./style.module.css";
import {FONT_DICT} from "../../assets/js/constants.js";
import {SoundList} from "../../components/soundList/SoundList.jsx";
import {AudioProvider} from "../../context/AudioContext.jsx";
import {SearchProvider} from "../../context/SearchContext.jsx";
import {Input} from "../../components/input/Input.jsx";
import {useEffect, useRef} from "react";

export const DubbingSounds = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const sectionRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            const scrolled = entry.intersectionRatio <= 0;
            if (scrolled){
                inputRef.current.style.opacity = 0.5;
            }else {
                inputRef.current.style.opacity = 1;
            }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        })

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <SearchProvider list={state.list}>
            <section
                className={styles.dubPage}
                style={{
                    viewTransitionName: `item-${id}`
                }}
            >
                <AudioProvider>
                    <h1
                        className={styles.title}
                        ref={sectionRef}
                        style={{
                            fontFamily: `var(${FONT_DICT[id]})`,
                            ...state.styleLogo
                        }}
                    >
                        {state.label}
                    </h1>
                        <Input ref={inputRef}/>
                    <SoundList/>
                </AudioProvider>
            </section>
        </SearchProvider>
    );
}