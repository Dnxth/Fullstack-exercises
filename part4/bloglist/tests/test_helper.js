const Blog = require('../models/blog')

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

module.exports = {
  initialBlogs,
  blogsInDb,
}
