exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('project').insert([
        { id: 1, project_name: 'New project' },
        { id: 2, project_name: 'Another project' },
        { id: 3, project_name: 'Project #3' }
      ]);
    });
};
