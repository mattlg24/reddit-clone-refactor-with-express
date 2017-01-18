'use strict'

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users')
                .insert({
                    name: 'Dracula',
                    user_name: 'Blood Sucker',
                    hashed_pw: 'thiswillbeahashedpw',
                }),
                knex('users')
                .insert({
                    name: 'Santa',
                    user_name: 'Fat Guy',
                    hashed_pw: 'thiswillbeahashedpw',
                }),
                knex('users')
                .insert({
                    name: 'Tom the Turkey',
                    user_name: 'Mr. Delicious',
                    hashed_pw: 'thiswillbeahashedpw',
                })
                knex('users')
                .insert({
                    name: 'New Year\'s Ned',
                    user_name: 'Little Guy',
                    hashed_pw: 'thiswillbeahashedpw',
                })
            ]);
        });
};
