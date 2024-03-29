const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images/articles/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.png')
    }
})
  
const upload = multer({ storage: storage });

const articleController = require('../controllers/articleController');

router.post('/article/new', articleController.newArticle);
router.get('/articles/:limit?', articleController.getArticles);
router.get('/article/:text', articleController.getArticle);
router.delete('/deleteArticle/:id', articleController.deleteArticle);
router.put('/edit/:id', articleController.editArticle);
//The second params on the following route definition is a Middleware that actually will execute BEFORE the upload method of the controller
router.post('/uploadImg/:id', upload.single('file'), articleController.upload);
router.get('/image/:file', articleController.image);

module.exports = router;