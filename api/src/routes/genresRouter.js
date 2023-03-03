const { Router } = require('express');

const genresRouter = Router();
const {getGenresHanlder} = require ('../Handlers/genresHandler.js')

genresRouter.get ("/", getGenresHanlder);

module.exports = genresRouter