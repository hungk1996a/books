
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publisher').del()
    .then(function () {
      // Inserts seed entries
      return knex('publisher').insert([
        {id:5, name:"hung", address: "sdf"},
        {id:3, name: "hung2", address: "dff"},
        {id:4, name: "hung3", address: "fdfffd"}
      ]);
    });
};
