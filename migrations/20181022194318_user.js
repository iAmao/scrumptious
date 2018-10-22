const { composeMigration } = require('./util')

exports.up = composeMigration(knex =>
  knex.schema
    .createTable('user', function (table) {
      table
        .uuid('id')
        .unique()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
      table.string('name')
      table.string('email').unique()
      table.string('password')
      table.timestamps(true, true)
    }),
__filename
)

exports.down = composeMigration((knex) => {
  return knex.schema.dropTableIfExists('user')
}, __filename)
