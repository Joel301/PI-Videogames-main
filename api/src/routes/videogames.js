const { default: axios } = require("axios");
const { Router } = require("express");
require("dotenv").config();
const { APIKEY } = process.env;

const APIURL = "https://api.rawg.io/api/games";

const router = Router();

const getVideogameDataList = async (args) => {
    console.log(args);
    const { name, id } = args;
    let params = {
        key: APIKEY,
        search: name,
    };
    let { data } = await axios.get(`${APIURL}`, { params });
    const limit = !!name ? 15 : 100;
    // console.log(data);
    const res = [];
    while (res.length < limit) {
        while (res.length < limit && data.results.length > 0) {
            const { id, name, background_image } = data.results.shift();
            if (!id) break;
            res.push({ id, name, background_image });
        }
        let response = await axios.get(data.next);
        data = response.data;
    }
    return res;
};

const getVideogameById = async (id_) => {
    let data = {};
    const params = {
        key: APIKEY,
    };
    try {
        const { data } = await axios.get(`${APIURL}/${id_}`, { params });
        // let data = response.data;
        // console.log("here");
        const { id, name, background_image, description, released, rating } =
            data;
        const plataform = data.platforms.map(
            (plataform) => plataform.platform.name
        );

        const res = {
            id,
            name,
            background_image,
            description,
            released,
            rating,
            plataform,
        };

        return res;
    } catch {
        if (!!response) return { err: `${id_} id no encontrado` };
    }
};

router.get("/:id", (req, res) => {
    const { id } = req.params;
    getVideogameById(id).then((answ) => res.json(answ));
});

router.get("/", (req, res) => {
    console.log(req.params, req.query);
    const { name } = req.query;

    if (name) {
        getVideogameDataList({ name, id: "" }).then((data) => res.json(data));
        return;
    }
    getVideogameDataList({}).then((data) => res.json(data));
});

module.exports = router;
