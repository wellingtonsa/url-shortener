import mongoose from 'mongoose'

export async function connect () {
  await mongoose.connect('mongodb+srv://interlinkuser:interlink123@cluster0-ab55r.mongodb.net/linkshortener?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

  })
}
