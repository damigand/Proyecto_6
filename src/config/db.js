const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL);

        console.log('Connected successfully to the DB');
    } catch (error) {
        console.log(`error connecting to DB: ${error}`);
    }
}

module.exports = { connectDB };
