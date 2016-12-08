'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('posts').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('posts').insert({
                    user_id: '3',
                    title: 'Thanksgiving',
                    imageUrl: 'http://www.clipartlord.com/wp-content/uploads/2015/01/turkey8.png',
                    description: 'I LOVE a good Thanksgiving meal. The food is always so delicious. I mean the GRAVY, the gravy is out of this world!',
                    votes: -2,
                    date: 'October 24, 2016',
                    // momentDate: moment().subtract(3, 'day').calendar()
                }),
                knex('posts').insert({
                    user_id: '2',
                    title: 'Christmas',
                    imageUrl: 'http://coloringkids.org/wp-content/uploads/santa-cartoon.jpg',
                    description: 'I like to bring presents to everyone because I\'m a jolly good fellow.',
                    votes: 0,
                    date: 'October 25, 2016',
                    // momentDate: moment().subtract(1, 'day').calendar()
                }),
                knex('posts').insert({
                    user_id: '1',
                    title: 'Halloween',
                    imageUrl: 'http://www.wikihow.com/images/e/ee/Colored-Intro-7.jpg',
                    description: 'Spooky Scary Creepy Crawly. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    votes: 1,
                    date: 'October 22, 2016',
                    // momentDate: moment().subtract(5, 'days').calendar()
                })
            ]);
        });
};
