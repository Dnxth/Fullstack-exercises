const supertest = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')
const Blog = require('../models/blog')

const api = supertest(app)

describe('blogs api', () => {
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('The unique identifier property of the blog posts is by default id', async () => {
    const blogs = await Blog.find({})
    expect(blogs[0].id).toBeDefined()
  })
})

afterAll(() => {
  mongoose.connection.close()
})
