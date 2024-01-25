require('dotenv').config()

const { NODE_ENV, MONGODB_URI_TEST } = process.env

const PORT = process.env.PORT
const MONGODB_URI =
  NODE_ENV === 'test' ? MONGODB_URI_TEST : process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT,
}
