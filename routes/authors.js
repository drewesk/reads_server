var express = require('express');
var router = express.Router();
const Authors = require('../db/authors_queries.js')

router.get('/', function(req, res, next) {
  Authors.getAllAuthors()
    .then(authors => {
      res.json(authors);
    });
});

router.post('/new', (req, res, next) => {
  Authors.createAuthor(req.body)
    .then(authors => {
      res.json(authors[0]);
    });
});

router.put('/:id/edit', (req, res, next) => {
  Authors.updateAuthor(req.params.id, req.body)
    .then(authors => {
      res.json(authors[0]);
    });
});

router.delete('/:id/delete', (req, res, next) => {
      Authors.deleteAuthor(req.params.id)
        .then(() => {
          res.json({
            deleted: true
          });
        });
});

module.exports = router;
