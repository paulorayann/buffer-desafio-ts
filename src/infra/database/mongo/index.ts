import mongoose from 'mongoose'

class Database {
  constructor() {
    this.connect()
  }

  connect() {
    return mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/buffer_challenge')
  }

  disconnect() {
    return mongoose.connection.close()
  }
}

export default new Database().connect()