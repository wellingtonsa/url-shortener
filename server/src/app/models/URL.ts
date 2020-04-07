import { Schema, Document, model } from 'mongoose'
import { Click } from '@models/Click'
import shortid from 'shortid'

export interface URL extends Document {
    full: string;
    short: string;
    clicks: Click[];
}

const URLSchema = new Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortid.generate
  },
  clicks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Click',
      required: false
    }
  ]
})

export default model<URL>('URL', URLSchema)
