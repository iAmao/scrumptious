const { composeMigration } = require('./util')

exports.up = composeMigration(knex =>
  knex.schema
    .createTable('card', function (table) {
      table
        .uuid('id')
        .unique()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
      table
        .uuid('user_id')
        .references('id')
        .inTable('user')
        .onDelete('SET NULL')
      table
        .uuid('board_id')
        .references('id')
        .inTable('board')
        .onDelete('CASCADE')
      table
        .uuid('status_id')
        .references('id')
        .inTable('board_status')
        .onDelete('CASCADE')
      table.string('name')
      table.integer('point')
      table.date('due_date')
      table.text('description')
      table.timestamps(true, true)
    }),
__filename
)

exports.down = composeMigration((knex) => {
  return knex.schema.dropTableIfExists('card')
}, __filename)
