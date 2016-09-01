import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'

export default class Server extends express {
  constructor() {
    super()
    this.use(bodyParser.urlencoded({extended: false}))
    this.use(cookieParser())
    this.use(morgan('combined'))
  }
}
