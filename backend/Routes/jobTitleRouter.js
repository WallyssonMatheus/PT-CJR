const express = require("express");
const router = express.Router();

const jobTitleController = require('../Controllers/jobTitleController.js')

router.post('/create-job', (req, res) => {
    jobTitleController.createJob(req, res);
});

module.exports = router;
