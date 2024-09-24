const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema(
    {
        name: {},
        age: {},
        typeSpecialty: {},
        //pokemon: [{}]
    },
    {
        timestamps: true,
    }
);

const Trainer = mongoose.model('trainers', trainerSchema, 'trainers');

module.exports = Trainer;
