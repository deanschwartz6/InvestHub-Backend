/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("logins", (table) => {
        table.increments("account_id").primary().notNullable();
            table.string("full_name").notNullable();
            table.string("email").notNullable();
            table.string("password").notNullable();
        table.timestamps(true, true)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("logins");
};
