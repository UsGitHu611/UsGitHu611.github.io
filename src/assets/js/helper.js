export const copyLink = async ({reference, time, slug}) => {
    const urlWithTimeCode = `${location.origin}#/player?reference=${reference}&time=${time}&phrase=${slug}`;
    await navigator.clipboard.writeText(urlWithTimeCode);
}

export const addFavorites = (soundId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const existingSoundId = favorites.find((id) => id === soundId);

    if (existingSoundId) return;

    favorites.push(soundId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}