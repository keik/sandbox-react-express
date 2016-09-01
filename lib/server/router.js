import {Router} from 'express'

const router = Router()

const users = []

router
  .get('/api/v1/users', (req, res, next) => {
    res.end(JSON.stringify(users))
  })
  .post('/api/v1/users', (req, res, next) => {
    const body = req.body
    if (body.name) {
      users.push(body.name)
      return res.end('aa')
    }
    return res.end('bb')
  })

export default router
