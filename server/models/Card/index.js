import { Model } from 'objection';


export default class Card extends Model {
  static tableName = 'card';

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      due_date: { type: 'date' },
      point: { type: 'integer' },
      user_id: { type: 'integer' },
      board_id: { type: 'integer' },
      status_id: { type: 'integer' },
      description: { type: 'string' },
      name: { type: 'string', minLength: 3, maxLength: 63 },
    }
  }

  static relationMappings = {
    creator: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/User`,
      join: {
        from: 'card.user_id',
        to: 'user.id'
      }
    },
    board: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/Board`,
      join: {
        from: 'card.board_id',
        to: 'board.id'
      }
    },
    status: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/Status`,
      join: {
        from: 'card.status_id',
        to: 'board_status.id'
      }
    },
    labels: {
      relation: Model.ManyToManyRelation,
      modelClass: `${__dirname}/Label`,
      join: {
        from: 'card.id',
        through: {
          from: 'card_label.card_id',
          to: 'card_label.label_id'
        },
        to: 'label.id'
      }
    },
    attachments: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/Attachment`,
      join: {
        from: 'card.id',
        to: 'attachment.card_id'
      }
    }
  }
}
