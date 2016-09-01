import {Router} from 'express'
import React from 'react'

import renderComponent from '../helper/render-component'
import UsersList from '../components/users-list.jsx'

const users = ['user1', 'user2']

export default Router()
  .get('/users', (req, res, next) => {
    var ul = React.createFactory(UsersList)
    res.end(renderComponent(ul({users: users})))
  })
  .get('/api/v1/users', (req, res, next) => {
    return res.end(JSON.stringify(users))
  })
  .post('/api/v1/users', (req, res, next) => {
    const body = req.body
    if (body.name) {
      users.push(body.name)
      return res.status(201).end()
    }
    return res.status(400).end()
  })
