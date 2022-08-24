import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

export default {
  database: {
    url: process.env.MONGO_URL,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST
  }
};
