const express = require("express");
const router = express.Router();

const userController = require('../Controllers/userController.js')

router.post('/register', (req, res) => {
    userController.createUser(req, res);
})

module.exports = router;