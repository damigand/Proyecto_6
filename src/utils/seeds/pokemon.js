require('dotenv').config();
const mongoose = require('mongoose');
const Pokemon = require('../../api/models/Pokemon');

mongoose
    .connect(process.env.DB_URL)
    .then(async () => {
        const pokemon = await Pokemon.findOne();

        if (pokemon) {
            Pokemon.collection.drop();
        }
    })
    .catch((error) => console.log(`Error dropping data (pokemon): ${error}`))
    .then(async () => {
        await Pokemon.insertMany(data);
    })
    .catch((error) => console.log(`Error inserting data (pokemon): ${error}`))
    .finally(() => mongoose.disconnect());

const data = [
    {
        name: 'Charizard',
        level: 65,
        types: ['Flying', 'Fire'],
    },
    {
        name: 'Blastoise',
        level: 48,
        types: ['Water'],
    },
    {
        name: 'Weepinbell',
        level: 28,
        types: ['Grass', 'Poison'],
    },
    {
        name: 'Electrike',
        level: 12,
        types: ['Electric'],
    },
    {
        name: 'Hariyama',
        level: 65,
        types: ['Fighting'],
    },
];
