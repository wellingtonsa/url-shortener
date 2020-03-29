import { Schema, Document, model } from 'mongoose'
import shortid from 'shortid'

export interface URL extends Document {
    full: string;
    short: string;
    clicks: number;
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
  clicks: {
    type: Number,
    required: false,
    default: 0
  }
})

export default model<URL>('URL', URLSchema)
