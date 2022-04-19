const service = require('./login.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

//list all handler
async function list(req, res) {
    const data = req.body;
    const response = await service.list(data.email);
    res.json({data: { users: response } });
}

async function create(req, res){
    const data = req.body;
    const response = await service.create(data);
    res.status(201).send({ data: response });
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: asyncErrorBoundary(create),
}