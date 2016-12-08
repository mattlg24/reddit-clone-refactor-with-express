var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var bcrypt = require('bcrypt')

/* GET home page. */
router.get('/posts', function(req, res, next) {
    // console.log('i got here api.js router.get');
    knex('posts')
    .join('users', 'users.id','posts.user_id')
        .then(function(results) {
            console.log('api.js results are', results);
            res.json(results)
        })
});

// get one post
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

// post a post
router.post('/posts', function(req, res, next) {
    // console.log('api.js router.post');
    // console.log('req.body', req.body);
    knex('posts')
        .insert({
            title: req.body.title,
            // author: req.body.author,
            user_id: req.body.user_id,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            votes: 0,
            date: new Date()
        }, '*')
        .then(function(results) {
          console.log('res are', results);
            res.send(results)
        })
})

// edit a post
router.put('/posts/:id', function(req, res, next) {
    // console.log('api.js router.put');
    // console.log('id', req.params.id);
    // console.log('req.body', req.body);
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

// delete
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

//signup
router.post('/signup', function(req, res, next) {
    // console.log('api.js router.get signup');
    // console.log('req.body is ', req.body);
    knex('users')
        .where('user_name', req.body.user_name)
        .then(function(results) {
            if (results.length >= 1) {
                console.log('that username is already taken.')
            } else {
                let hash = bcrypt.hashSync(req.body.password, 12)
                    // console.log('hash', hash);
                knex('users')
                    .insert({
                        name: req.body.name,
                        user_name: req.body.user_name,
                        hashed_pw: hash
                    }, '*')
                    .then(function(results) {
                        let theUser = results[0]
                            // console.log('user info is', theUser);
                        delete theUser.hashed_pw
                            // console.log('user info is', theUser);
                            // req.session.userInfo = theUser
                        res.json(theUser)
                    })
            }
        })
})

// sign in
router.post('/signin', function(req, res, next) {
    console.log('api.js router.get signin route');
    console.log('req.body', req.body);
    knex('users')
        .where('user_name', req.body.user_name)
        .first()
        .then((user) => {
          var passwordMatch = bcrypt.compareSync(req.body.password, user.hashed_pw)
          if (passwordMatch == false) {
            console.log('Bad username or password');
          } else {
            req.session.userInfo = user
            // console.log('req.session.userInfo', user);
            //delete hashed_pw
            res.json(user)
          }
        })

})

module.exports = router;
