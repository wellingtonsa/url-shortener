import express from 'express'
import * as dotenv from 'dotenv'
import { connect } from '@config/database'
import cors from 'cors'

class App {
    public express:express.Application

    public constructor () {
      dotenv.config()
      this.express = express()
      this.middlewares()
      this.database()
      this.routes()
    }

    private middlewares (): void{
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      connect()
    }

    private routes (): void {
      require('./app/routes')(this.express)
    }
}

export default new App().express
