/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("companies", (table) => {
        table.increments("company_id").primary().notNullable();
            table.string("company_background_img").notNullable();
            table.string("company_status").notNullable();
            table.string("company_logo").notNullable();
            table.string("company_investment_tag").notNullable();
            table.string("company_country_flag").notNullable();
            table.string("company_country_abv").notNullable();
            table.string("time_left").notNullable();
            table.string("company_name").notNullable();
            table.string("company_description").notNullable();
            table.string("company_industry_tag").notNullable();
            table.string("company_investment_status").notNullable();
        table.timestamps(false, false);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("companies");
};
