import { Model } from 'objection';


export default class User extends Model {
  static tableName = 'user';

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      email: { type: 'string', minLength: 3, maxLength: 63 },
      name: { type: 'string', minLength: 3, maxLength: 63 },
      password: { type: 'string', minLength: 8, maxLength: 63 }
    }
  }

  static relationMappings = {
    boards: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/Board`,
      join: {
        from: 'user.id',
        to: 'board.user_id'
      }
    }
  }
}
