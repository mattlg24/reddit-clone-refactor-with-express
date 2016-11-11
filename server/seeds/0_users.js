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
                    user_name: 'blood sucker',
                    hashed_pw: 'thiswillbeahashedpw',
                }),
                knex('users')
                .insert({
                    name: 'Santa',
                    user_name: 'fat guy',
                    hashed_pw: 'thiswillbeahashedpw',
                }),
                knex('users')
                .insert({
                    name: 'Tom the Turkey',
                    user_name: 'mr. delicious',
                    hashed_pw: 'thiswillbeahashedpw',
                })
            ]);
        });
};
