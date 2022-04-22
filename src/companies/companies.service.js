const knex = require('../db/connection');

const tableName = "companies";

function list(){
    return knex(tableName)
        .select("*");
}

module.exports = {
    list,
}