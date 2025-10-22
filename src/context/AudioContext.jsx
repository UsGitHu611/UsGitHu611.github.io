import {createContext, useRef} from "react";
import {audio} from "../assets/js/audio.js";

export const audioContext = createContext(null);
const Provider = audioContext.Provider;


export const AudioProvider = ({children}) => {
    const audioRef = useRef(null);

    const playFromTime = async (times, reference) => {
        if (!audioRef.current) return;

        await audioRef.current.pause();
        audioRef.current.src = audio[reference];
        await audioRef.current.load();

        const [from, to] = times.split(":").map(Number);
        audioRef.current.currentTime = from;

        const stopAtTime = () => {
            if (audioRef.current && audioRef.current.currentTime >= to) {
                audioRef.current.pause();
                audioRef.current.removeEventListener('timeupdate', stopAtTime);
            }
        };

        audioRef.current.removeEventListener('timeupdate', stopAtTime);
        audioRef.current.addEventListener('timeupdate', stopAtTime);

        try {
            await audioRef.current.play();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Provider value={playFromTime}>
            <audio ref={audioRef}/>
            {children}
        </Provider>
    );
}

// 00:52:11 The Suffering 1