const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        typeSpecialty: { type: String, required: true },
        pokemon: [{ type: mongoose.Types.ObjectId, ref: 'pokemons' }],
    },
    {
        timestamps: true,
    }
);

const Trainer = mongoose.model('trainers', trainerSchema, 'trainers');

module.exports = Trainer;
