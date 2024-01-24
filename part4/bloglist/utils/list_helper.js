const dummy = (blogs) => {
  if (Array.isArray(blogs)) {
    return 1
  }

  return 0
}

const totalLikes = (blogs) => {
  if (blogs.length !== 0) {
    return blogs.reduce((all, blog) => all + blog.likes, 0)
  }

  return 0
}

const favoriteBlog = (blogs) => {
  if (blogs.length !== 0) {
    const blog = blogs.reduce((a, b) => (a.likes > b.likes ? a : b))
    return {
      title: blog.title,
      author: blog.author,
      likes: blog.likes,
    }
  }

  return 0
}

const mostBlogs = (blogs) => {
  if (blogs.length !== 0) {
    const authorsAndBlogs = blogs.reduce((authorCount, blog) => {
      authorCount[blog.author] = (authorCount[blog.author] || 0) + 1
      return authorCount
    }, {})

    const totalBlogs = Math.max(...Object.values(authorsAndBlogs))
    const authorWithMostBlogs = Object.keys(authorsAndBlogs).filter(
      (author) => authorsAndBlogs[author] === totalBlogs
    )

    return {
      author: authorWithMostBlogs[0],
      blogs: totalBlogs,
    }
  }

  return 0
}

const mostLikes = (blogs) => {
  if (blogs.length !== 0) {
    const authorsAndLikes = blogs.reduce((likesCount, blog) => {
      likesCount[blog.author] = (likesCount[blog.author] || 0) + blog.likes

      return likesCount
    }, {})

    const totalLikes = Math.max(...Object.values(authorsAndLikes))
    const authorWithMostLikes = Object.keys(authorsAndLikes).filter(
      (author) => authorsAndLikes[author] === totalLikes
    )

    return {
      author: authorWithMostLikes[0],
      likes: totalLikes,
    }
  }

  return 0
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
