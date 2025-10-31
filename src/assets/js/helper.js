export const copyLink = async ({reference, time, slug}) => {
    const urlWithTimeCode = `${location.origin}#/player?reference=${reference}&time=${time}&phrase=${slug}`;
    await navigator.clipboard.writeText(urlWithTimeCode);
}

export const addFavorites = (soundId, soundRef) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const idStr = `${soundId}:${soundRef}`;
    const existingSoundIdIndex = favorites.findIndex((id) => id === idStr);

    if (existingSoundIdIndex !== -1) {
        favorites.splice(existingSoundIdIndex, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }else {
        favorites.push(idStr);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}