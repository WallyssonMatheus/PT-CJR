const userService = require('../Services/postService');

const createPost = async (req, res) => {
    try {
        const post = await userService.createPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).send(`Erro ao criar post: ${error.message}`)
    };
};

const getPost = async (req, res) => {
    try {
        const post = await userService.getPost(req.body);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).send(`Erro ao carregar post ${error}`)
    };
};

module.exports = {
    createPost,
    getPost,
};