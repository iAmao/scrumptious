import fs from 'fs'
import path from 'path'
import express from 'express'
import fourOhFour from 'lib/error/four.oh.four'

const BASE = '/api/v1'

export default (app, router) => {
  const dirs = fs.readdirSync(path.resolve(__dirname, './'))

  const routes = dirs.forEach((file) => {
    if (file.slice(-3) !== '.js') {
      const router = express.Router()
      require(`./${file}`).default(router)
      app.use(`${BASE}/${file}`, router)
    }
  })
  app.use(`${BASE}/*`, fourOhFour)
}
