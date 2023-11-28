const userService = require('../Services/userService.js');
const multi = require('multiparty');

const createUser = async (req, res) => {
    try {
        const form = new multi.Form();
        
        form.parse(req ,function(err,fields,files){
            console.log(fields)
            console.log(files);
            // const user = await userService.createUser();
            // res.status(201).json(user);
        }) 
    } catch (error) {
        res.status(500).json({'error': `${error}`})
    };
};

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({'error': `${error}`})
    };
};

module.exports = {
    createUser,
    getUser,
};