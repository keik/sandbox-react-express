import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'

import router from './router'

export default class Server extends express {
  constructor() {
    super()
    this.use(bodyParser.urlencoded({extended: false}))
    this.use(bodyParser.json())
    this.use(cookieParser())
    this.use(express.static('build/assets'))
    this.use(morgan('combined'))
    this.use(router)
  }
}
