const userService = require('../Services/userService.js');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(`Erro ao criar usuário: ${error}`)
    }
};

module.exports = {
    createUser,
};