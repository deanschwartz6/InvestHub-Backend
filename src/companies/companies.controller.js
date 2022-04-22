const service = require('./companies.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

//list all handler
async function list(req, res) {
    const data = req.body;
    const response = await service.list(data);
    res.json({ data: response });
}

module.exports = {
    list: asyncErrorBoundary(list),
}