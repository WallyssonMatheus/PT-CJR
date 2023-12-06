const express = require("express");
const router = express.Router();

const userController = require('../Controllers/userController.js')

router.post('/register', (req, res) => {
    userController.createUser(req, res);
});

router.post('/login', (req, res) => {
    userController.getUser(req, res);
});

module.exports = router;