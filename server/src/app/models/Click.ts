import { Schema, Document, model } from 'mongoose'

export interface Click extends Document {
    createdAt: Date;
}

const ClickSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default model<Click>('Click', ClickSchema)
