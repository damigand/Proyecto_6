const controller = require('../controllers/pokemon');
const express = require('express');
const router = express.Router();

router.get('/', controller.getPokemons);

router.get('/:id', controller.getPokemonById);

router.get('/name/:name', controller.getPokemonByName);

router.get('/level/:level', controller.getPokemonsByLevel);

router.get('/type/:type', controller.getPokemonsType);

router.post('/create', controller.createPokemon);

router.put('/edit/:id', controller.editPokemon);

router.delete('/delete/:id', controller.deletePokemon);

module.exports = router;
