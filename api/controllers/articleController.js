const validator = require('validator');
const articleModel = require('../models/Article');
const fs = require('fs');
const path = require('path');

const newArticle = (req, res) => {
    
    const { title, content } = req.body;

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

const getArticles = (req, res) => {

    const { limit } = req.params;

    articleModel.find({})
        .limit(limit)
        .sort({date: -1})
        .then((articles) => {
            return res.status(200).json({
                status: 'Success',
                articles
            });
        })
        .catch(() => {
            return res.status(404).json({
                status: 'Error',
                message: 'There are no articles in the database..'
            });
        });
    
}

const getArticle = (req, res) => {

    const { id } = req.params;

    articleModel.findById(id)
    .then((article) => {
        return res.status(200).json({
            status: 'Success',
            article
        });
    })
    .catch(() => {
        return res.status(404).json({
            status: 'Error',
            message: 'There are no article in the database with that exact ID..'
        });
    });

}

const deleteArticle = (req, res) => {

    const { id } = req.params;

    articleModel.deleteOne({ _id: id })
    .then(() => {
        return res.status(200).json({
            status: 'Success',
            message: 'The article was successfully removed from the database..'
        });
    })
    .catch(() => {
        return res.status(404).json({
            status: 'Error',
            message: 'There was an error trying to delete the article..'
        });
    });

}

const editArticle = (req, res) => {

    const { id } = req.params;
    const { title, content } = req.body;

    try {

        if( validator.isEmpty(title) || validator.isEmpty(content) ){
            throw new Error();
        }

        articleModel.findOneAndUpdate({ _id: id }, { title, content }, {new: true})
        .then((article) => {
            return res.status(200).json({
                status: 'Success',
                message: 'The article was successfully edited..',
                article: article
            });
        })
        .catch(() => {
            return res.status(404).json({
                status: 'Error',
                message: 'There was an error trying to edit the article..'
            });
        });

    } catch(error) {
        return res.status(400).json({
            message: 'There was an error trying to edit the article..'
        });
    }

}

const upload = (req, res) => {

    let file = req.file.originalname;

    let fileplit = file.split('\.');
    let extension = fileplit[1];

    if (extension != 'png' && extension != 'jpg' && extension != 'jpeg' && extension != 'gif') {
        fs.unlink(req.file.path, () => {
            return res.status(400).json({
                message: "Invalid file"
            });
        });
    }

    const {id} = req.params;

    articleModel.findOneAndUpdate({ _id: id }, { image: req.file.filename }, {new: true})
        .then((article) => {
            return res.status(200).json({
                status: 'Success',
                message: 'The article was successfully edited..',
                article: article
            });
        })
        .catch(() => {
            return res.status(404).json({
                status: 'Error',
                message: 'There was an error trying to edit the article..'
            });
        });
}

const image = (req, res) => {
    let file = req.params.file;
    let localPath = `./images/articles/${file}`;

    fs.stat(localPath, (error, exist) => {
        if (exist) {
            return res.sendFile(path.resolve(localPath));
        } else {
            return res.status(404).json({
                status: 'Error',
                message: 'The image does not exist..'
            });
        }
    });
}

module.exports = {
    newArticle,
    getArticles,
    getArticle,
    deleteArticle,
    editArticle,
    upload,
    image
}