const { default: axios } = require("axios");
const { Router } = require("express");
require("dotenv").config();
const { APIKEY } = process.env;

const APIURL = "https://api.rawg.io/api/genres";

const router = Router();

router.get("/", async (req, res) => {
    const {response} = await axios.get(APIURL);

    res.json({ msg: "itwork" });
});

module.exports = router;
