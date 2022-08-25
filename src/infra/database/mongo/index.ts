import mongoose from 'mongoose';
import config from '../../../config/config';
import dotenv from 'dotenv';
dotenv.config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(process.env.MONGO_URL || `mongodb://${config.database.host}:27017/${config.database.name}`);
  }

  disconnect() {
    return mongoose.connection.close();
  }
}

export default new Database().connect();
