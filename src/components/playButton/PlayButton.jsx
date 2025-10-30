import {SoundButton} from "../soundButton/SoundButton.jsx";
import {useSound} from "../../assets/hook/useSound.js";

export const PlayButton = ({reserveTime, reserveReference}) => {
    const {playAudioHandler} = useSound({reserveTime, reserveReference});
        return (
        <SoundButton
            onClick={playAudioHandler}
            title="Играть"
            icon="play"
        />
    );
}