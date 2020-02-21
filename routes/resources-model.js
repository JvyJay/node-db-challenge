const db = require('../db');

module.exports = {
  find,
  findById,
  add
};

function find() {
  return db('resource');
}

function findById(id) {
  return db('resource')
    .where({ id })
    .first();
}

function add(resource) {
  return db('resource', 'id')
    .insert(resource)
    .then(id => findById(...id));
}
