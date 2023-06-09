/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments('id').primary();
        table.integer('post_id').notNullable();
        table.foreign('post_id').references('id').inTable('posts');
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.string('content').notNullable();
        table.timestamps('created_at', { useTz: true }).notNullable();
        // table.timestamp('updated_at', { useTz: true }).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comments');
};
