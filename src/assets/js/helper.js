export const copyLink = async ({reference, time, slug}) => {
    const urlWithTimeCode = `${location.origin}#/player?reference=${reference}&time=${time}&phrase=${slug}`;
    await navigator.clipboard.writeText(urlWithTimeCode);
}

export const addFavorites = (soundId, soundRef) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const idStr = `${soundId}:${soundRef}`;
    const existingSoundId = favorites.find((id) => id === idStr);

    if (existingSoundId) return;

    favorites.push(idStr);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}