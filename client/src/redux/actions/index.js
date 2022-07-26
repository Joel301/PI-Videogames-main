import { useSelector } from "react-redux";
import {
    UPDATEVIDEOGAMELIST,
    GETGAMEDETAIL,
    UPDATESEARCH,
    CURRENTPAGE,
    FILTERLIST,
} from "../reducer";
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

export async function filterList(search) {
    if (!search) return { type: FILTERLIST, payload: [] };

    const response = await fetch(`${URLAPI}videogames?name=${search}`);
    const payload = await response.json();
    return { type: FILTERLIST, payload };
}

export function updateSearch(text) {
    if (!text) return { type: UPDATESEARCH, payload: "" };
    return { type: UPDATESEARCH, payload: text };
}
export function updatePage(page) {
    return { type: CURRENTPAGE, payload: page };
}
