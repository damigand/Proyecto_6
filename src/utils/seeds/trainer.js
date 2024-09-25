require('dotenv').config();
const Trainer = require('../../api/models/Trainer');
const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_URL)
    .then(async () => {
        const trainer = await Trainer.findOne();

        if (trainer) {
            await Trainer.collection.drop();
        }
    })
    .catch((error) => console.log(`Error trying to delete trainers: ${error}`))
    .then(async () => {
        await Trainer.insertMany(data);
    })
    .catch((error) => console.log(`Error trying to insert trainers: ${error}`))
    .finally(() => mongoose.disconnect());

const data = [
    {
        name: 'Giovanni',
        age: 48,
        typeSpecialty: 'Normal',
    },
    {
        name: 'Brock',
        age: 20,
        typeSpecialty: 'Rock',
    },
    {
        name: 'Jasmine',
        age: 26,
        typeSpecialty: 'Steel',
    },
    {
        name: 'Flannery',
        age: 30,
        typeSpecialty: 'Fire',
    },
];
