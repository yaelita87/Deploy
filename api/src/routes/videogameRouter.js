const {Router}= require('express');


const videogameRouter = Router();
const {getVideogameHandler} = require('../Handlers/videogameHandler.js')

videogameRouter.get('/:id', getVideogameHandler);

module.exports = videogameRouter;