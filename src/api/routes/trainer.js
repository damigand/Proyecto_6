const express = require('express');
const controller = require('../controllers/trainer');
const router = express.Router();

router.get('/', controller.getTrainers);

router.get('/:id', controller.getTrainersById);

router.get('/name/:name', controller.getTrainersByName);

router.get('/age/:age', controller.getTrainersByAge);

router.get('/type/:type', controller.getTrainersByType);

router.post('/create', controller.createTrainer);

router.put('/edit/:id', controller.editTrainer);

router.put('/addpokemon/:trainerid', controller.addTrainerPokemon);

router.put('/deletepokemon/:trainerid', controller.deleteTrainerPokemon);

router.delete('/delete/:id', controller.deleteTrainer);

module.exports = router;
