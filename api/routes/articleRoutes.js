const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');

router.post('/article/new', articleController.newArticle);

module.exports = router;