const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getJobs = (body) => {

}

const createJob = async (body) => {
    const { name, team } = body;

    const user = await prisma.jobTitle.create({
        data: {
            name,
            team
        }
    });

    return user;
};

module.exports = {
    getJobs,
    createJob,
};