import {useMessage} from "../../assets/hook/useMessage.js";
import {SoundButton} from "../soundButton/SoundButton.jsx";
import {Message} from "../message/Message.jsx";
import {addFavorites} from "../../assets/js/helper.js";

export const FavoritesButton = ({favoritesSoundId}) => {
    const {messageHandler, showMessage} = useMessage(() =>
        addFavorites(favoritesSoundId)
    );
    const isActiveCurrentItem =
        localStorage.getItem("favorites")?.includes(favoritesSoundId)
    return (
        <SoundButton
            onClick={messageHandler}
            title="Добавить в избранное"
            icon="star-outline"
            active={isActiveCurrentItem}
        >
            <Message
                message="Отмеченно как избранное! 🔥"
                showMessage={showMessage}
            />
        </SoundButton>
    );
}