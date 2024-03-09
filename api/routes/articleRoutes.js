const express = require('express');
const router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (cb) {
      cb(null, './images/articles/')
    },
    filename: function (cb) {
      cb(null, Date.now() + '.png')
    }
})
  
var upload = multer({ storage: storage });

const articleController = require('../controllers/articleController');

router.post('/article/new', articleController.newArticle);
router.get('/articles/:limit?', articleController.getArticles);
router.get('/article/:id', articleController.getArticle);
router.delete('/deleteArticle/:id', articleController.deleteArticle);
router.put('/edit/:id', articleController.editArticle);
//The second params on the following route definition is a Middleware that actually will execute BEFORE the upload method of the controller
router.post('/uploadImg/:id', upload.single('file'), articleController.upload);

module.exports = router;