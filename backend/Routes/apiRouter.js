const express = require("express")
const router = express.Router()

const userRouter = require("./userRouter.js");
const jobTitleRouter = require("./jobTitleRouter.js");
const postRouter = require("./postRouter.js");

router.use('/users', userRouter);

router.use('/post', postRouter); 

router.use('/job-title', jobTitleRouter);

module.exports = router;
