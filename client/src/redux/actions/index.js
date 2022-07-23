import { UPDATEVIDEOGAMELIST, GETGAMEDETAIL, UPDATESEARCH } from "../reducer";
const URLAPI = "http://localhost:3001/";

export async function updateVideoGameList() {
    const response = await fetch(`${URLAPI}videogames`);
    const payload = await response.json();
    // console.log(payload);
    return { type: UPDATEVIDEOGAMELIST, payload };
}

export async function getGameDetail(id) {
    const response = await fetch(`${URLAPI}videogames/${id}`);
    const payload = await response.json();
    // console.log(payload);
    return { type: GETGAMEDETAIL, payload };
}

export function updateSearch(text) {
    if (!text) return { type: UPDATESEARCH, payload: "" };
    return { type: UPDATESEARCH, payload: text };
}
