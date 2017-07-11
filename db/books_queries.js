const knex = require('./connection');

module.exports = {
  getAll: () => {
    return knex('book');
  },
  getOne: () => {

  },
  getBookByAuthor: (author_id) => {

  }
}
