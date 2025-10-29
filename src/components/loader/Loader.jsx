import {Icon} from "../icon/Icon.jsx";

export const Loader = () => {
    const isMobile =
        /Android|iPhone|BlackBerry|Opera Mini|iPod|iPad|webOS/i.test(navigator.userAgent);
    return (
        <Icon
            url={`/icons/${isMobile ? 'spinner' : 'dots'}.svg`}
            style={{margin: "7px auto 0", display: "block"}}
        />
    )
}