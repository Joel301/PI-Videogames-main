const { default: axios } = require("axios");
const { Genre } = require("./../db");
const { Router } = require("express");
require("dotenv").config();
const { APIKEY } = process.env;

const APIURL = "https://api.rawg.io/api/genres";

const router = Router();

router.get("/", async (req, res) => {
    var genresArray = await Genre.findAll();
    res.json(genresArray);
});

module.exports = router;
