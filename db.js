const mongoose = require('mongoose');

let database;

async function getDatabase() {
    mongoose.connect('mongodb://127.0.0.1:27017/library')
    .then(() => {
        console.log("Database connected")
    })
    .catch(() => console.log("Database connection error..!"))
}
module.exports = {
    getDatabase
}