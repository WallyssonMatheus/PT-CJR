const express = require("express");
const app = express();

const userRouter = require("./Routes/userRouter.js");

const jobTitleRouter = require("./Routes/jobTitleRouter.js");

const postRouter = require("./Routes/postRouter.js");

app.use(express.json());

app.use('/users', userRouter);

app.use('/job-title', jobTitleRouter);

app.use('/post', postRouter); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})
