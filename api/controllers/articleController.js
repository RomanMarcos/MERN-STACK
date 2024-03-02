const validator = require('validator');
const articleModel = require('../models/Article');

const newArticle = (req, res) => {

    const { title, content, date, image } = req.body;

    try {
        
        if( validator.isEmpty(title) || validator.isEmpty(content) ){
            throw new Error();
        }

        const article = new articleModel({title, content});

        article.save()
        .then(() => {
            console.log('Article saved correctly!');
        })
        .catch((error) => {
            console.log(`There was an error: ${error}`);
            throw new Error();
        });

        return res.status(200).json({
            status: 'Success',
            article: article
        });

    } catch(error) {
        return res.status(400).json({
            message: 'There was an error trying to create a new article because of missing required information (title or content)..'
        });
    }
}

module.exports = {
    newArticle
}