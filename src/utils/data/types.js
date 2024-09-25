const types = [
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Rock',
    'Fighting',
    'Psychic',
    'Ghost',
    'Bug',
    'Poison',
    'Flying',
    'Electric',
    'Ground',
    'Ice',
    'Dragon',
    'Dark',
    'Steel',
    'Fairy',
];

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}

module.exports = { types, getRandomType };
