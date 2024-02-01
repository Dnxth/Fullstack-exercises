const supertest = require('supertest')
const app = require('../app')
const User = require('../models/User')
const helper = require('./test_helper')
const mongoose = require('mongoose')

const api = supertest(app)

beforeEach(async () => {
  await User.deleteMany({})

  for (let user of helper.initialUsers) {
    let userObject = new User(user)
    await userObject.save()
  }
})

describe('user api post', () => {
  test('a valid user can be added', async () => {
    const newUser = {
      username: 'newUsername',
      name: 'newName',
      password: 'newPassword',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const users = await helper.usersInDb()
    const usernames = users.map((user) => user.username)

    expect(users).toHaveLength(helper.initialUsers.length + 1)
    expect(usernames).toContain('newUsername')
  })

  test('invalid user is not created', async () => {
    const newUser = {
      username: 'A',
      name: 'newName',
      password: 'newPassword',
    }

    const result = await api.post('/api/users').send(newUser).expect(400)

    const users = await helper.usersInDb()
    expect(users).toHaveLength(helper.initialUsers.length)
    expect(result.body.error).toContain(
      'is shorter than the minimum allowed length (3)'
    )
  })
})

afterAll(() => {
  mongoose.connection.close()
})
