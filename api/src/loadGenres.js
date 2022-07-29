const { conn, Genre } = require("./db");
const { default: axios } = require("axios");
require("dotenv").config();
const { APIKEY } = process.env;

const APIURL = "https://api.rawg.io/api/genres";

const loadGenres = async () => {
    const params = {
        key: APIKEY,
    };
    var genresArray = [];
    const { data } = await axios.get(APIURL, { params });
    data.results.map((gen) => {
        genresArray.push({ ID: gen.id, Nombre: gen.name });
    });
    // console.log(Genre);
    genresArray.map(async (gen) => {
        await Genre.findOrCreate({ where: { ...gen } });
    });
    console.log("done");
};

module.exports = loadGenres;
