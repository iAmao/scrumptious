import { Model } from 'objection';


export default class Board extends Model {
  static tableName = 'board';

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      poster: { type: 'string', minLength: 3, maxLength: 63 },
      name: { type: 'string', minLength: 3, maxLength: 63 },
      background: { type: 'string', minLength: 8, maxLength: 63 },
      user_id: { type: 'integer' }
    }
  }

  static relationMappings = {
    creator: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/User`,
      join: {
        from: 'board.user_id',
        to: 'user.id'
      }
    },
    cards: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/Card`,
      join: {
        from: 'board.id',
        to: 'card.board_id'
      }
    },
    status: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/Status`,
      join: {
        from: 'board.id',
        to: 'board_status.board_id'
      }
    },
    members: {
      relation: Model.ManyToManyRelation,
      modelClass: `${__dirname}/User`,
      join: {
        from: 'board.id',
        through: {
          from: 'board_member.board_id',
          to: 'board_member.user_id'
        },
        to: 'user.id'
      }
    },
  }
}
