const express = require("express")
const router = express.Router()

const userRouter = require("./userRouter.js");

const jobTitleRouter = require("./jobTitleRouter.js");

router.use('/users', userRouter);

router.use('/job-title', jobTitleRouter);

module.exports = router;
