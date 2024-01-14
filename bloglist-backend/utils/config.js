const path = require('path')
const envPath = path.resolve(__dirname, '..', '..', '.env')
require('dotenv').config({ path: envPath })

const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI
const PORT = process.env.PORT
const SECRET = process.env.SECRET

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET
}