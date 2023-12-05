const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createPost = async (body) => {
    const { content, comments } = body;

    const novoPost = await prisma.posts.create({
        data: {
            content: content,
            comments: comments
        },
    });

    return novoPost;
};

const getPost = async (body) => {
    const { content} = body;

    const user = await prisma.posts.findUnique({
        where: {
            content: content,
        },
    });

    return content;
};

module.exports = {
    createPost,
    getPost,
};