const { composeMigration } = require('./util')

exports.up = composeMigration(knex =>
  knex.schema
    .createTable('card_label', function (table) {
      table
        .uuid('id')
        .unique()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
      table
        .uuid('card_id')
        .references('id')
        .inTable('card')
        .onDelete('CASCADE')
      table
        .uuid('label_id')
        .references('id')
        .inTable('label')
        .onDelete('CASCADE')
      table
        .uuid('user_id')
        .references('id')
        .inTable('user')
        .onDelete('SET NULL')
      table.timestamps(true, true)
    }),
__filename
)

exports.down = composeMigration((knex) => {
  return knex.schema.dropTableIfExists('card_label')
}, __filename)
