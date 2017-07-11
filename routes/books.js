var express = require('express');
var router = express.Router();
const Books = require('../db/books_queries.js')

router.get('/', function(req, res, next) {
  Books.getAll()
    .then(books => {
      res.json(books);
    });
});

module.exports = router;
