'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments();
        table.integer('post_id')
            .references('id')
            .inTable('posts')
            .onDelete('CASCADE')
        table.string('author')
        table.string('text')
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('comments')
}
