var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/posts', function(req, res, next) {
    // console.log('i got here api.js router.get');
    knex('posts')
        .then(function(results) {
            // console.log('api.js results are', results);
            res.json(results)
        })
});

router.get('/posts/:id', function(req, res, next) {
    // console.log('i got to one post router.get');
    // console.log('id', req.params.id);
    knex('posts')
        .where('id', req.params.id)
        .then(function(onePost) {
            // console.log('one post is', onePost);
            res.send(onePost)
        })
})

router.post('/posts', function(req, res, next) {
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

router.put('/posts/:id', function(req, res, next) {
    console.log('api.js router.put');
    console.log('id', req.params.id);
    console.log('req.body', req.body);
    knex('posts')
        .where('id', req.body.id)
        .update({
            title: req.body.title,
            author: req.body.author,
            imageUrl: req.body.imageUrl,
            description: req.body.description
        }, '*')
        .then(function(results) {
            res.send(results)
        })

})

router.delete('/posts/:id', function(req, res, next) {
    // console.log('api.js router.delete');
    // console.log('id', req.params.id);
    knex('posts ')
        .del()
        .where('id', req.params.id)
        .then(function() {
            console.log('i think i was deleted');
        })

})

module.exports = router;
