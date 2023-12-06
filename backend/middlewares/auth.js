const { verifyToken } = require('../auxs/jwt.js');

const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({ message: 'Token não encontrado' });
    }

    try {
        const dataToken = verifyToken(authorization);
        req.user = dataToken;
        next();
    } catch (error) { 
        return res.status(401).json({ message: 'Token expirado ou inválido' });
    }
};

module.exports = { tokenValidation };
