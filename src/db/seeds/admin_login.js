/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE logins RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("logins").insert([
        {
          full_name: "admin",
          email: "konzortiadevelopment@gmail.com",
          password: "KonzortiaDEV2684!",
        },
        {
          full_name: "Dean Schwartz",
          email: "deanschwartz2@gmail.com",
          password: "DrizzyDean01",
        },
      ]);
    });
};
