import { Model } from 'objection';


export default class Board extends Model {
  static tableName = 'board_status';

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      user_id: { type: 'integer' },
      board_id: { type: 'integer' },
      position: { type: 'integer' },
      description: { type: 'string' },
      name: { type: 'string', minLength: 3, maxLength: 63 },
    }
  }

  static relationMappings = {
    creator: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/User`,
      join: {
        from: 'board_status.user_id',
        to: 'user.id'
      }
    },
    board: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/Board`,
      join: {
        from: 'board_status.board_id',
        to: 'board.id'
      }
    }
  }
}
