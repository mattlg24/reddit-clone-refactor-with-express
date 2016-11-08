'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('posts').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('posts').insert({
                    title: 'Thanksgiving',
                    author: 'Tom the Turkey',
                    imageUrl: 'http://www.clipartlord.com/wp-content/uploads/2015/01/turkey8.png',
                    description: 'I LOVE a good Thanksgiving meal. The food is always so delicious. I mean the GRAVY, the gravy is out of this world!',
                    votes: -2,
                    date: 'October 24, 2016',
                    // momentDate: moment().subtract(3, 'day').calendar()
                }),
                knex('posts').insert({
                    title: 'Christmas',
                    author: 'Santa',
                    imageUrl: 'http://coloringkids.org/wp-content/uploads/santa-cartoon.jpg',
                    description: 'I like to bring presents to everyone because I\'m a jolly good fellow.',
                    votes: 0,
                    date: 'October 25, 2016',
                    // momentDate: moment().subtract(1, 'day').calendar()
                }),
                knex('posts').insert({
                    title: 'Halloween',
                    author: 'Dracula',
                    imageUrl: 'http://www.wikihow.com/images/e/ee/Colored-Intro-7.jpg',
                    description: 'Spooky Scary Creepy Crawly. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    votes: 1,
                    date: 'October 22, 2016',
                    // momentDate: moment().subtract(5, 'days').calendar()
                })
            ]);
        });
};
