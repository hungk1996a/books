exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', function(table) {
        table.increments('id');
        table.string('title');
        table.string('author');
        table.integer('publisher_id');
        table.float('price');
        table.date('deleted_at')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books');
};