import fs from 'fs'
import path from 'path'


const files = fs.readdirSync(path.resolve(__dirname, './'))

const service = files.reduce((acc, file) => {
  if (file.slice(-3) === '.js' && !file.match('index')) {
    acc[file.slice(0, -3)] = require(`./${file}`).default
  }
  return acc
}, {})

export default service
