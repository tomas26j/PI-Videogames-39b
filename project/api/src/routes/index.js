const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerVideogames = require('./videogamesRouter');
const routerGenres = require('./genresRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ruta para juegos
router.use('/videogames', routerVideogames);

// ruta para generos
router.use('/genres', routerGenres);

module.exports = router;


/*
Codigo de ejemplo ;)

//configurando variables de entorno.
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});

*/
