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
}