const { composeMigration } = require('./util')

exports.up = composeMigration(knex =>
  knex.schema
    .createTable('board_status', function (table) {
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
      table.string('name')
      table.integer('position')
      table.text('description')
      table.timestamps(true, true)
    }),
__filename
)

exports.down = composeMigration((knex) => {
  return knex.schema.dropTableIfExists('board_status')
}, __filename)
