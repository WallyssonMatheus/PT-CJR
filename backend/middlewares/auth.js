const { verifyToken } = require('../auxs/jwt.js');

const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({ message: 'Token not found' });
    }

    try {
        const dataToken = verifyToken(authorization);
        req.userId = dataToken.id;
        next();
    } catch (error) { 
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { tokenValidation };