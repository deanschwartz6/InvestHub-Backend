/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE companies RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("companies").insert([
        {
          company_background_img: "http://localhost:3000/static/media/konzortia-card-image.48579d702b0dc6949d6714b8a44124a8.svg",
          company_status: "Just Launched",
          company_logo: "http://localhost:3000/static/media/konzortia-card-logo.030ffde4d5abad9074eec2f964558b1f.svg",
          company_investment_tag: "Equity",
          company_country_flag: "http://localhost:3000/static/media/US-flag-card.5b0bef469ea61637c5c0455c4443228b.svg",
          company_country_abv: "US",
          time_left: "50 days left",
          company_name: "KONZORTIA CAPITAL INC",
          company_description: "FinTech consortium that aims to redesign financial services on a global scale",
          company_industry_tag: "FinTech",
          company_investment_status: "Reg D via InvestHub, LLC",
        },
        // {
        //   company_background_img: "http://localhost:3000/static/media/naked-collective-image.77d6e8a2600bec39716b8154ca8b4f53.svg",
        //   company_status: "Most Funded",
        //   company_logo: "http://localhost:3000/static/media/naked-collective-logo.933d4e8ee717c2c64f857ec8914cc363.svg",
        //   company_investment_tag: "Convertable",
        //   company_country_flag: "http://localhost:3000/static/media/ireland-flag-card.469809545be2822678f9a1e0f57319bf.svg",
        //   company_country_abv: "IR",
        //   time_left: "9 days left",
        //   company_name: "THE NAKED COLLECTIVE",
        //   company_description: "The Naked Collective is a carbon neutral wellness company powered by people, plants and purpose. We're on a mission to provide health conscious consumers with vitamin packed, healthy drinks via our two brands Mude & So.Beer. €5.9m already funded & PE backed. Join the Collective.",
        //   company_industry_tag: "Food & Beverage",
        //   company_investment_status: "Reg D via InvestHub, LLC",
        // },
      ]);
    });
};
