const jobTitleService = require('../Services/jobTitleService.js');

const createJob = async (req, res) => {
    try {
        const job = await jobTitleService.createJob(req.body);
        res.status(201).json(job);
    } catch (error) {
        res.status(500).send(`Erro ao criar cargo: ${error}`)
    };
};

module.exports = {
    createJob,
};
