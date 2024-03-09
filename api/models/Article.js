const { Schema, model } = require('mongoose');

// Define here the data that the articles will have
// https://mongoosejs.com/docs/schematypes.html

const ArticleSchema = Schema({
    title: {
        type: String,
        required: true
    }, 
    content: {
        type: String,
        requirde: true
    },
    date: {
        type: Date,
        default: Date.now()
    }, 
    image: {
        type: String,
        default: 'default.png'
    }
});

//The last parameter is optional and it's related with the db collection this model will use
module.exports = model('Article', ArticleSchema, 'articles');