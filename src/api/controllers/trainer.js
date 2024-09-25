const Trainer = require('../models/Trainer');
const { getRandomType } = require('../../utils/data/types');

const getTrainers = async (req, res, next) => {
    try {
        const trainers = await Trainer.find().populate('pokemon');

        return res.status(200).json(trainers);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getTrainers): ${error}`);
    }
};

const getTrainersById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const trainer = await Trainer.findById(id).populate('pokemon');

        return res.status(200).json(trainer);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getTrainersById): ${error}`);
    }
};

const getTrainersByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        //Regex usado para obtener "matches" sin tener en cuenta mayusculas o minusculas.
        const trainer = await Trainer.find({ name: { $regex: name, $options: 'i' } }).populate('pokemon');

        return res.status(200).json(trainer);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getTrainersByName): ${error}`);
    }
};

const getTrainersByType = async (req, res, next) => {
    try {
        const { type } = req.params;
        //Regex usado para obtener "matches" sin tener en cuenta mayusculas o minusculas.
        const trainer = await Trainer.find({ typeSpecialty: { $regex: type, $options: 'i' } }).populate('pokemon');

        return res.status(200).json(trainer);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getTrainersByType): ${error}`);
    }
};

const getTrainersByAge = async (req, res, next) => {
    try {
        const { age } = req.params;
        const trainer = await Trainer.find({ age: { $gte: age } }).populate('pokemon');
        return res.status(200).json(trainer);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getTrainersByAge): ${error}`);
    }
};

const createTrainer = async (req, res, next) => {
    try {
        var type = req.body.typeSpecialty;
        if (!type || type == 'random') {
            type = getRandomType();
        }

        //Con esto hacemos que no haya repetidos en el array.
        const pokemon = [...new Set(req.body.pokemon)];

        const newTrainer = new Trainer({
            name: req.body.name,
            age: req.body.age,
            typeSpecialty: type,
            pokemon: pokemon,
        });

        const trainer = await newTrainer.save();
        await trainer.populate('pokemon');
        return res.status(201).json(trainer);
    } catch (error) {
        return res.status(404).json(`Error creating data (createTrainer): ${error}`);
    }
};

const editTrainer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const trainer = await Trainer.findById(id);
        trainer.name = req.body.name || trainer.name;
        trainer.age = req.body.age || trainer.age;
        trainer.typeSpecialty = req.body.typeSpecialty || trainer.typeSpecialty;

        const pokemon = [...new Set(req.body.pokemon)];

        trainer.pokemon = pokemon || trainer.pokemon;

        await trainer.save();
        await trainer.populate('pokemon');

        return res.status(200).json(trainer);
    } catch (error) {
        return res.status(404).json(`Error updating data (editTrainer): ${error}`);
    }
};

const deleteTrainer = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Trainer.findByIdAndDelete(id);

        return res.status(200).json('Trainer deleted successfully!');
    } catch (error) {
        return res.status(404).json(`Error deleting data (deleteTrainer): ${error}`);
    }
};

const addTrainerPokemon = async (req, res, next) => {
    try {
        const { trainerid } = req.params;
        const pokemon = [...new Set(req.body.pokemon)];

        const trainer = await Trainer.findById(trainerid);
        const trainerPokemonString = trainer.pokemon.map((p) => p.toString());

        for (var a = 0; a < pokemon.length; a++) {
            if (!trainerPokemonString.includes(pokemon[a])) {
                trainer.pokemon.push(pokemon[a]);
            }
        }

        await trainer.save();
        await trainer.populate('pokemon');

        return res.status(200).json(trainer);
    } catch (error) {
        return res.status(404).json(`Error adding data (addTrainerPokemon): ${error}`);
    }
};

const deleteTrainerPokemon = async (req, res, next) => {
    try {
        const { trainerid } = req.params;
        const pokemon = req.body.pokemon;

        const trainer = await Trainer.findById(trainerid);

        if (pokemon.length > 0) {
            trainer.pokemon = trainer.pokemon.filter((p) => !pokemon.includes(p.toString()));
            await trainer.save();
        }

        await trainer.populate('pokemon');

        return res.status(200).json(trainer);
    } catch (error) {
        return res.status(404).json(`Error deleting data (deleteTrainerPokemon): ${error}`);
    }
};

module.exports = {
    getTrainers,
    getTrainersByAge,
    getTrainersById,
    getTrainersByName,
    getTrainersByType,
    createTrainer,
    editTrainer,
    deleteTrainer,
    deleteTrainerPokemon,
    addTrainerPokemon,
};
