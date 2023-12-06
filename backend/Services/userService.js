const { PrismaClient } = require('@prisma/client');

const jwt = require("../auxs/jwt.js")

const prisma = new PrismaClient();

const createUser = async (body) => {
    const { name, email, password, profile_picture, gender, job_title } = body;

    // Transform Base64 string to Byte Buffer
    const bufferImage = Buffer.from(profile_picture,"base64");

    const existingUser = await prisma.users.findUnique({
        where: {
            username: email,
        },
    });

    const existingJobTitle = await prisma.jobTitle.findUnique({
        where: {
            name: job_title,
        }
    });

    if (!existingJobTitle) throw new Error("O cargo não está cadastrado na plataforma!");

    if (existingUser) throw new Error("O email já foi cadastrado na plataforma!");

    const createdUser = await prisma.users.create({
        data: {
            username: email,
            password,
            name,
            profile_picture: bufferImage,
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
        rejectOnNotFound: (err) => new Error("Usuário não cadastrado"),
    });

    const token = jwt.createToken(createdUser);

    return token;
};

const getUser = async (body) => {
    const { login, password } = body;

    const user = await prisma.users.findUnique({
        where: {
            username: login,
        },
        select: {
            username: true,
            name: true,
            profile_picture: true,
            gender: true,
            job_title: true,
            admin: true,
            password: true,
        },
    });

    if (!user) throw new Error("Usuário não cadastrado");

    if (user.password !== password ) throw new Error("Email ou senha incorretos");

    const token = jwt.createToken(user);

    return token;
};

module.exports = {
    createUser,
    getUser,
};