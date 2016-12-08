'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments();
        table.integer('user_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        table.string('title')
        table.string('imageUrl')
        table.string('description', 1000)
        table.integer('votes')
        table.string('date')
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('posts')
}
