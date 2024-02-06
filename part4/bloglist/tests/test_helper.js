const Blog = require('../models/Blog')
const User = require('../models/User')

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

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

const initialUsers = [
  {
    username: 'usernameTest',
    name: 'nameTest',
    password: 'passwordTest',
  },
  {
    username: 'usernameTest2',
    name: 'nameTest2',
    password: 'passwordTest2',
  },
]

const usersInDb = async () => {
  const users = await User.find({})
  return users.map((user) => user.toJSON())
}

const user = { username: 'test', password: 'password' }

module.exports = {
  initialBlogs,
  blogsInDb,
  initialUsers,
  usersInDb,
  user,
}
