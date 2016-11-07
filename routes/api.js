var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/allPosts', function(req, res, next) {
    console.log('i got here api.js');
    knex('posts')
        .then(function(results) {
            console.log('api.js results are', results);
            res.json(results)
        })
});

module.exports = router;
