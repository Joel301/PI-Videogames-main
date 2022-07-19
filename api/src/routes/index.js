const { Router } = require("express");

const videogameRouter = require("./videogames");
const genresRouter = require("./genres");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogameRouter);
router.use("/genres", genresRouter);

module.exports = router;
