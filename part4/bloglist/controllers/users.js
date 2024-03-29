const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/User')

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body

    if (body.password === undefined || body.password.length < 3) {
      return response.status(400).json({
        error: `Password is shorter than the minimum allowed length (3)`,
      })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const newUser = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })

    const savedUser = await newUser.save()
    response.json(savedUser)
  } catch (error) {
    next(error)
  }
})

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs', {
    url: 1,
    title: 1,
    author: 1,
  })
  response.json(users)
})

module.exports = usersRouter
