import morgan from 'morgan'
import winston from 'winston'

import Server from './lib/server'

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      colorize: true
    })
  ]
})

const server = new Server()
server.listen(8080, () => logger.info(`server stared on port ${ 8080 }`))
