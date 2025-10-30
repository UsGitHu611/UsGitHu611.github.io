import {useMessage} from "../../assets/hook/useMessage.js";
import {SoundButton} from "../soundButton/SoundButton.jsx";
import {Message} from "../message/Message.jsx";
import {copyLink} from "../../assets/js/helper.js";

export const CopyLinkButton = ({linkData}) => {
    const {messageHandler, showMessage} = useMessage(() =>
        copyLink(linkData)
    );
    return (
        <SoundButton
            onClick={messageHandler}
            title="Копировать URL"
            icon="link"
        >
            <Message
                message="Скопировано! &#128515;"
                showMessage={showMessage}
            />
        </SoundButton>
    );
}