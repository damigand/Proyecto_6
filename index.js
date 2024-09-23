require('dotenv').config();
const express = require('express');
const PORT = 3000;
const app = express();
const router = express.Router();

const { connectDB } = require('./src/config/db');

connectDB();

router.get('/', (req, res, next) => {
    res.send('Hello');
});

app.use('/', router);

app.listen(PORT, () => {
    console.log(`escuchando en http://localhost:${PORT}`);
});
