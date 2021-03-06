const { composeMigration } = require('./util')

exports.up = composeMigration(knex =>
  knex.schema
    .createTable('board_member', function (table) {
      table
        .uuid('id')
        .unique()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
      table
        .uuid('user_id')
        .references('id')
        .inTable('user')
        .onDelete('CASCADE')
      table
        .uuid('board_id')
        .references('id')
        .inTable('board')
        .onDelete('CASCADE')
      table
        .uuid('board_access_id')
        .references('id')
        .inTable('board_access')
        .onDelete('CASCADE')
      table.timestamps(true, true)
    }),
__filename
)

exports.down = composeMigration((knex) => {
  return knex.schema.dropTableIfExists('board_member')
}, __filename)
