var express = require('express');
var router = express.Router();
const Authors = require('../db/authors_queries.js')

router.get('/', function(req, res, next) {
  Authors.getAll()
    .then(authors => {
      res.json(authors);
    });
});

module.exports = router;
