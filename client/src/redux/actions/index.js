import { UPDATEVIDEOGAMELIST } from "../reducer";
const URLAPI = "http://localhost:3001/";

export async function updateVideoGameList() {
    const response = await fetch(`${URLAPI}videogames`);
    const payload = await response.json();
    // console.log(payload);
    return { type: UPDATEVIDEOGAMELIST, payload };
}
