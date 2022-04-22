const knex = require('../db/connection');

const tableName = "logins";

function list(){
    return knex(tableName)
        .select("*");
}

function create(newUser){
    return knex(tableName)
        .insert(newUser)
        .returning("*");
}

module.exports = {
    list,
    create,
}