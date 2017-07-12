var express = require('express');
var router = express.Router();
const Books = require('../db/books_queries.js')

router.get('/', function(req, res, next) {
  Books.getAllBooks()
    .then(books => {
      res.json(books);
    });
});

router.post('/new', (req, res, next) => {
  Books.createBook(req.body)
    .then(books => {
      res.json(books[0]);
    });
});

router.put('/:id/edit', (req, res, next) => {
  Books.updateBook(req.params.id, req.body)
    .then(books => {
      res.json(books[0]);
    });
});

router.delete('/:id/delete', (req, res, next) => {
  Books.deleteBook(req.params.id)
    .then(() => {
      res.json({
        deleted: true
      });
    });
});

module.exports = router;
