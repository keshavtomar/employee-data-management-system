require('dotenv').config();

const mongoose = require('mongoose');
const password = process.env.PASSWORD;

const mongoURI = 'mongodb+srv://keshavtomar:' + password + '@cluster0.ibzyjol.mongodb.net/settyl-intern?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

const mongoDB = () => {
    // if showing error in mongoose that mongoose.connect no longer requests a callback, downgrade your mongoose
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err) => {
        if (err) {
            console.log("Database connection failed with following error");
            console.log(err);
        }
        else {
            console.log("Database connection successfull");
        }
    });
}

module.exports = mongoDB;