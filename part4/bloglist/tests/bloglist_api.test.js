const supertest = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
  {
    title: 'titleTest1',
    author: 'authorTest1',
    url: 'https://',
    likes: 0,
  },
  {
    title: 'titleTest2',
    author: 'authorTest2',
    url: 'https://',
    likes: 0,
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
})

describe('blogs api get', () => {
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

describe('blogs api post', () => {
  test('a valid blog can be added', async () => {
    const newBlog = {
      title: 'newBlog',
      author: 'authorTest',
      url: 'https://',
      likes: 0,
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const blogsTitle = response.body.map((blog) => blog.title)

    expect(response.body).toHaveLength(initialBlogs.length + 1)
    expect(blogsTitle).toContain('newBlog')
  })
})

afterAll(() => {
  mongoose.connection.close()
})
