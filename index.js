require('dotenv').config();
const express = require('express');
const PORT = 3000;
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { connectDB } = require('./src/config/db');
connectDB();

const pokemonRouter = require('./src/api/routes/pokemon');
const trainerRouter = require('./src/api/routes/trainer');

router.use('/pokemon', pokemonRouter);
router.use('/trainer', trainerRouter);
app.use('/', router);

router.get('/', (req, res, next) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log(`escuchando en http://localhost:${PORT}`);
});
