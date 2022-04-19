const knex = require('../db/connection');

const tableName = "logins";

function list(email){
    if(email){
        return knex(tableName)
            .select("*")
            .where('email', 'like', `${email}%`);
    }
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