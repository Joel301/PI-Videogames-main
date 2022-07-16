const { Router } = require("express");

const videogameRouter = require("./videogames");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogameRouter);

module.exports = router;
