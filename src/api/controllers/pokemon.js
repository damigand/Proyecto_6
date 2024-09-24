const { default: mongoose } = require('mongoose');
const Pokemon = require('../models/Pokemon');

const getPokemons = async (req, res, next) => {
    try {
        const pokemons = await Pokemon.find();
        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getPokemons): ${error}`);
    }
};

const getPokemonById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pokemon = await Pokemon.findById(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getPokemonById): ${error}`);
    }
};

const getPokemonByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const pokemons = await Pokemon.find({ name: name });
        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getPokemonByName): ${error}`);
    }
};

const getPokemonsByLevel = async (req, res, next) => {
    try {
        const { level } = req.params;
        const pokemon = await Pokemon.find({ level: { $gte: level } });
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getPokemonsByLevel): ${error}`);
    }
};

const getPokemonsType = async (req, res, next) => {
    try {
        const { type } = req.params;
        const pokemons = await Pokemon.find({ types: { $in: type } });
        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(404).json(`Error fetching data (getPokemonsType): ${error}`);
    }
};

const createPokemon = async (req, res, next) => {
    try {
        const newPokemon = new Pokemon({
            name: req.body.name,
            level: req.body.level,
            types: req.body.types,
        });

        const pokemon = await newPokemon.save();
        return res.status(201).json(pokemon);
    } catch (error) {
        return res.status(404).json(`Error fetching data (createPokemon): ${error}`);
    }
};

const editPokemon = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pokemon = await Pokemon.findById(id);

        pokemon.name = req.body.name || pokemon.name;
        pokemon.level = req.body.level || pokemon.level;
        pokemon.types = req.body.types || pokemon.types;

        await pokemon.save();

        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json(`Error fetching data (editPokemon): ${error}`);
    }
};

const deletePokemon = async (req, res, next) => {
    try {
        const { id } = req.params;

        await Pokemon.findByIdAndDelete(id);
        return res.status(200).json('Pokemon was successfully deleted');
    } catch (error) {
        return res.status(404).json(`Error fetching data (deletePokemon): ${error}`);
    }
};

module.exports = {
    getPokemons,
    getPokemonById,
    getPokemonByName,
    getPokemonsByLevel,
    getPokemonsType,
    createPokemon,
    editPokemon,
    deletePokemon,
};
