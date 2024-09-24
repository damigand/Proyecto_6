const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema(
    {
        name: { type: String, required: true },
        level: { type: Number, required: true },
        types: [{ type: String, required: true }],
    },
    {
        timestamps: true,
    }
);

const Pokemon = mongoose.model('pokemons', pokemonSchema, 'pokemons');

module.exports = Pokemon;
