import {useCallback, useContext} from "react";
import {audioContext} from "../../context/AudioContext.jsx";
import {useSearchParams} from "react-router";

export const useSound = ({reserveTime, reserveReference}) => {
    const playFromTime = useContext(audioContext);
    const [searchParams, _] = useSearchParams();
    const reference = searchParams.get("reference") || reserveReference;
    const time = searchParams.get("time") || reserveTime;

    const playAudioHandler = useCallback(() => {
        playFromTime(time, reference);
    }, [playFromTime, time, reference]);

    return {
        playAudioHandler,
        time,
        reference
    }
}