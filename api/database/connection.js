const mongoose = require('mongoose');

const connection = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/blogDB");
        console.log('DB connection successfully!');
    } catch(error) {
        console.log(`There was an error trying to connect to the DB ${error}`);
        throw new Error(`There was an error trying to connect to the DB ${error}`);
    }
}

module.exports = {
    connection
}