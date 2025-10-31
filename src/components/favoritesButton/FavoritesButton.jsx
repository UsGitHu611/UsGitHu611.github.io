import {useMessage} from "../../assets/hook/useMessage.js";
import {SoundButton} from "../soundButton/SoundButton.jsx";
import {Message} from "../message/Message.jsx";
import {addFavorites} from "../../assets/js/helper.js";

export const FavoritesButton = ({favoritesSoundId, favoritesReference}) => {
    const {messageHandler, showMessage} = useMessage(() =>
        addFavorites(favoritesSoundId, favoritesReference)
    );
    const isActiveCurrentItem =
        localStorage.getItem("favorites")?.includes(`${favoritesSoundId}:${favoritesReference}`)
    return (
        <SoundButton
            onClick={messageHandler}
            title="Добавить в избранное"
            icon="star"
            active={isActiveCurrentItem}
        >
            <Message
                message="Отмеченно как избранное! 🔥"
                showMessage={showMessage}
            />
        </SoundButton>
    );
}