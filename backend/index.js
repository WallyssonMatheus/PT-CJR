const express = require("express");
const app = express();

const apiRouter = require("./Routes/apiRouter.js");

app.use(express.json());

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})
