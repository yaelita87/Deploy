const { Router } = require('express');
const videogameRouter = require ("./videogameRouter.js");
const videogamesRouter = require ("./videogamesRouter.js");
const genresRouter = require('./genresRouter.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogame", videogameRouter );

router.use("/videogames", videogamesRouter);

router.use("/genres", genresRouter);



module.exports = router;



