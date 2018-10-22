import { Model } from 'objection';


export default class Label extends Model {
  static tableName = 'label';

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 3, maxLength: 63 },
      color: { type: 'string' },
      user_id: { type: 'integer' },
      board_id: { type: 'integer' }
    }
  }
}
