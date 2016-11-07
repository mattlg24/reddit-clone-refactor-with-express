var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/allPosts', function(req, res, next) {
    // console.log('i got here api.js router.get');
    knex('posts')
        .then(function(results) {
            // console.log('api.js results are', results);
            res.json(results)
        })
});



router.post('/newPost', function(req, res, next) {
    // console.log('api.js router.post');
    // console.log('req.body', req.body);
    knex('posts ')
        .insert({
            title: req.body.title,
            author: req.body.author,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            votes: 0,
            date: new Date()
        }, '*')
        .then(function(results) {
            res.send(results)
        })

})

module.exports = router;
