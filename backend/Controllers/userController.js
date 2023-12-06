const userService = require('../Services/userService.js');

const createUser = async (req, res) => {
    try {   
        const result = await userService.createUser(req.body, req.file);
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({'error': `${error}`})
    };
};

const getUser = async (req, res) => {
    try {
        const result = await userService.getUser(req.body);
        res.status(200).json({ token: result });
    } catch (error) {
        res.status(404).json({ error: error.message })
    };
};

module.exports = {
    createUser,
    getUser,
};