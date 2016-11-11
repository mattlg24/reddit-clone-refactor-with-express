'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name')
        table.string('user_name')
        table.string('hashed_pw')
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('users')
}
