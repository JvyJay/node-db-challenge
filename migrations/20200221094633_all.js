exports.up = function(knex) {
  return knex.schema
    .createTable('project', projTbl => {
      projTbl.increments();
      projTbl.text('project_name', 200);
      projTbl.text('project_description', 200);
      projTbl.bool('project_completed');
    })
    .createTable('resource', reTbl => {
      reTbl.increments();
      reTbl.text('resource_name', 200);
      reTbl.text('resource_description', 200);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resource').dropTableIfExists('project');
};
