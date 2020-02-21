exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('resource').insert([
        { id: 1, resource_name: 'NodeJS' },
        { id: 2, resource_name: 'Javascript' },
        { id: 3, resource_name: 'SASS' }
      ]);
    });
};
