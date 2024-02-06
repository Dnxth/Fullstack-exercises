const supertest = require('supertest')
const app = require('../app')
const mongoose = require('mongoose')
const helper = require('./test_helper')

const Blog = require('../models/Blog')
const User = require('../models/User')

const api = supertest(app)

beforeEach(async () => {
  await User.deleteMany({})

  const newUser = {
    username: 'test',
    name: 'name',
    password: 'password',
  }

  await api.post('/api/users').send(newUser)

  await Blog.deleteMany({})

  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog)
    await blogObject.save()
  }
})

describe('blogs api get', () => {
  test('blogs are returned as json', async () => {
    const loggedUser = await api.post('/api/login').send(helper.user)

    await api
      .get('/api/blogs')
      .set('Authorization', `bearer ${loggedUser.body.token}`)
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
    const loggedUser = await api.post('/api/login').send(helper.user)

    const newBlog = {
      title: 'newBlog',
      author: 'newAuthorTest',
      url: 'https://',
      likes: 0,
    }
    await api
      .post('/api/blogs')
      .set('Authorization', `bearer ${loggedUser.body.token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await helper.blogsInDb()
    const blogsTitle = response.map((blog) => blog.title)

    expect(response).toHaveLength(helper.initialBlogs.length + 1)
    expect(blogsTitle).toContain('newBlog')
  })

  test('if likes property are missing return 0', async () => {
    const loggedUser = await api.post('/api/login').send(helper.user)

    const newBlog = {
      title: 'newBlog',
      author: 'newAuthorTest',
      url: 'https://',
    }
    await api
      .post('/api/blogs')
      .set('Authorization', `bearer ${loggedUser.body.token}`)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    const lastBlogAdded = await Blog.find({ author: 'newAuthorTest' })
    expect(lastBlogAdded[0].likes).toBe(0)
  })

  test('blogs without title or url return a bad request', async () => {
    const loggedUser = await api.post('/api/login').send(helper.user)

    const newBlog = {
      author: 'newAuthorTest',
      likes: 0,
    }
    await api
      .post('/api/blogs')
      .set('Authorization', `bearer ${loggedUser.body.token}`)
      .send(newBlog)
      .expect(400)

    const response = await helper.blogsInDb()
    expect(response).toHaveLength(helper.initialBlogs.length)
  })

  test('witout token return 401 Unauthorized', async () => {
    const newBlog = {
      title: 'newBlog',
      author: 'newAuthorTest',
      url: 'https://',
      likes: 0,
    }
    await api.post('/api/blogs').send(newBlog).expect(401)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
