const express = require("express");
const app = express();

const userRouter = require("./Routes/userRouter.js");

app.use(express.json());

app.use('/users', userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})
