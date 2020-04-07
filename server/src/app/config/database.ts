import mongoose from 'mongoose'

export async function connect ():Promise<void> {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

  })
}
