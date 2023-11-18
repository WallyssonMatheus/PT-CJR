const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createUser = async (body) => {
    const { name, email, password, profile_picture, gender, job_title } = body;

    const existingUser = await prisma.users.findUnique({
        where: {
            username: email,
        },
    });

    if (existingUser) {
        throw new Error("O email já foi cadastrado na plataforma!");
    };

    const createdUser = await prisma.users.create({
        data: {
            username: email,
            password,
            name,
            profile_picture,
            gender,
            job_title,
            admin: false,
        },
        select: {
            username: true,
            name: true,
            profile_picture: true,
            gender: true,
            job_title: true,
            admin: true,
            password: false,
        },
    });

    return createdUser;
};

const getUser = async (body) => {
    const { email, password } = body;

    const user = await prisma.users.findUnique({
        where: {
            username: email,
        },
        select: {
            username: true,
            name: true,
            profile_picture: true,
            gender: true,
            job_title: true,
            admin: true,
            password: false,
        },
    });

    if (!user) {
        throw "Usuário não cadastrado"
    }

    if (user.password !== password ) {
        throw "Email ou senha incorretos"
    };

    return user;
};

module.exports = {
    createUser,
    getUser,
};