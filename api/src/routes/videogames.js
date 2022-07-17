const { default: axios } = require("axios");
const { Router } = require("express");
require("dotenv").config();
const { APIKEY } = process.env;

const APIURL = "https://api.rawg.io/api/games";

const router = Router();

const getVideogameDataList = async () => {
    let { data } = await axios.get(`${APIURL}?key=${APIKEY}`);
    const res = [];
    while (res.length < 100) {
        data.results.map((set) => {
            const { id, name, background_image } = set;
            res.push({ id, name, background_image });
        });
        let response = await axios.get(data.next);
        data = response.data;
    }

    // if (!results) return;
    // results.map((set) => {
    //     const { id, name, background_image } = set;
    //     res.push({ id, name, background_image });
    // });
    // if (next && res.length < 100) {
    //     const response = await axios.get(next);
    //     // console.log(response.data);
    //     return [...res, await cleanVideogameData(response.data)];
    // }
    return res;
};

router.get("/", (req, res) => {
    console.log(req.params, req.query);
    getVideogameDataList().then((data) => res.json(data));
});

module.exports = router;
