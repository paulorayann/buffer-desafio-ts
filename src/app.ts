import cors from 'cors'
import express from 'express'
import routes from './routes/index.router'
import './infra/database/mongo/index'


class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  public init(): express.Application {
    return this.express
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(cors())
  }



  private routes(): void {
    this.express.use(...routes)
  }
}

export default App