const { composeMigration } = require('./util')

exports.up = composeMigration(knex =>
  knex.schema
    .createTable('board', function (table) {
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
      table.string('name')
      table.string('poster')
      table.string('background')
      table.timestamps(true, true)
    }),
__filename
)

exports.down = composeMigration((knex) => {
  return knex.schema.dropTableIfExists('board')
}, __filename)
