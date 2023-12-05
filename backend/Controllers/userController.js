const userService = require('../Services/userService.js');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(`Erro ao criar usuário: ${error.message}`)
    };
};

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).send(`Erro ao efetuar o login: ${error}`)
    };
};

module.exports = {
    createUser,
    getUser,
};
