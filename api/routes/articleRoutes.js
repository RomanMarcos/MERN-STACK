const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage= multer.diskStorage({
    destination: function(req, file, cb) {
        // cb method allow me to define where the files will be storage, in this case inside the /images/articles/ folder
        cb(null, './images/articles/');
    }, 
    __filename: function(req, file, cb) {
        cb(null, 'article' + Date.now() + file.originalname());
    }
});

const uploads = multer({storage: storage});

const articleController = require('../controllers/articleController');

router.post('/article/new', articleController.newArticle);
router.get('/articles/:limit?', articleController.getArticles);
router.get('/article/:id', articleController.getArticle);
router.delete('/deleteArticle/:id', articleController.deleteArticle);
router.put('/edit/:id', articleController.editArticle);
//The second params on the following route definition is a Middleware that actually will execute BEFORE the upload method of the controller
router.post('/uploadImg/:id', [uploads.single('file')], articleController.upload);

module.exports = router;