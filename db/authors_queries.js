const knex = require('../connection');

module.exports = {
  getAllAuthors: () => {
    return knex('author');
  },
  createAuthor: (author) => {
    return knex('author').insert(author);
  },
  updateAuthor: (author_id, author) => {
    return knex('author').where('id', author_id).update(author, '*');
  },
  deleteAuthor: (author_id) => {
    return knex('author').where('id', author_id).del();
  }
}
