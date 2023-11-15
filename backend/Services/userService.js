const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createUser = async (body) => {
    console.log(body);

    const { profile_picture, email, password, name, gender, job_title } = body;

    const user = await prisma.users.create({
        data: {
            username: email,
            password,
            name,
            profile_picture,
            gender,
            job_title,
            admin: true,
        }
    })

    return user
};

module.exports = {
    createUser,
};