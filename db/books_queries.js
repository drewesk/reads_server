const knex = require('../connection');

module.exports = {
  getAllBooks: () => {
    return knex('book');
  },
  getBook: (id) => {
    return knex('book').where('id', id);
  },
  createBook: (book) => {
    return knex('book').insert(book);
  },
  updateBook: (book_id, book) => {
    return knex('book').where('id', book_id).update(book, '*');
  },
  deleteBook: (book_id) => {
    return knex('book').where('id', book_id).del();
  }
}
