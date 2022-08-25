import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import routes from './routes/index.router';
import './infra/database/mongo/index';

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  public init(): express.Application {
    return this.express;
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(
      morgan(' [:date[clf]] ":method - :url" :status :res[content-length] ":referrer" ":user-agent"', {
        stream: accessLogStream
      })
    );
  }

  private routes(): void {
    this.express.use(...routes);
  }
}

export default new App().express;
