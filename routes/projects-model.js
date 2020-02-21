const db = require('../db');

module.exports = {
  find,
  findById,
  add,
  changeStuff
};

function find() {
  return db('project');
}

function findById(id) {
  return db('project')
    .where({ id })
    .first();
}

function add(proj) {
  return db('project', 'id')
    .insert(proj)
    .then(id => findById(...id));
}

function changeStuff(taskProj) {
  if (taskProj.completed !== 1) {
    taskProj.completed = false;
  } else {
    taskProj.completed = true;
  }
  return taskProj;
}
