const userService = require('../Services/post.service');

const createPost = async (req, res) => {
    try {
        const user = await userService.createPost(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(`Erro ao criar post: ${error.message}`)
    };
};

module.exports = {
    createPost,
};