const { PrismaClient } = require('@prisma/client');

const jwt = require("../auxs/jwt.js")

const prisma = new PrismaClient();

const createUser = async (body) => {
    const { name, email, password, profile_picture, gender, job_title } = body;

    // Transform Base64 string to Byte Buffer
    // const bufferImage = Buffer.from(profile_picture,"base64");

    if (file) profile_picture = file.path;

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

    const token = jwt.createToken(createdUser);

    return token;
};

const getUser = async (body) => {
    const { login, password } = body;

    try {

        const user = await prisma.users.findUniqueOrThrow({
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
                password: false,
            },
        });
    
        if (user.password !== password ) throw new Error("Email ou senha incorretos");
    
        const token = jwt.createToken(user);
    
        return token;
    
    } catch (error) {
        
        throw new Error("Usuário não cadastrado");

    }

};

module.exports = {
    createUser,
    getUser,
};