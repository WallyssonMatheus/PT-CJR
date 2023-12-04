const express = require("express");
const router = express.Router();

const postController = require('../Controllers/postController')

router.post('/post', (req, res) => {
    postController.createPost(req, res);
});

router.get('/post', (req, res) => {
    postController.getPost(req, res);
});

module.exports = router;