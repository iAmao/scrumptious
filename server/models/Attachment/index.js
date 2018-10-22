import { Model } from 'objection';


export default class Attachment extends Model {
  static tableName = 'attachment';

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      user_id: { type: 'integer' },
      card_id: { type: 'integer' },
      file_type: { type: 'string' },
      file_url: { type: 'string' }
    }
  }
}
