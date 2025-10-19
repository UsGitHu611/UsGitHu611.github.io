export const randomColor = (alpha) => {
    const HUE = Math.trunc(Math.random() * 360);
    const SATURATION = Math.trunc(Math.random() * 50);
    const LIGHTNESS = Math.trunc(Math.random() * 50);
    const ALPHA_CHANNEL = alpha || 80;

    return `hsl(${HUE}deg ${SATURATION}% ${LIGHTNESS}% / ${ALPHA_CHANNEL}%)`;
}