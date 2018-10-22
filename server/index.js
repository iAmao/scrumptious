import http from 'http'
import helmet from 'helmet'
import express from 'express'
import bodyParser from 'body-parser'

import { v1 } from 'routes'
import logger from 'lib/logger'

const { PORT = 10999, NODE_ENV = 'development' } = process.env

const app = express()
const server = http.createServer(app)
const router = express.Router()

const urlencodedConfig = {
  limit: '10mb',
  extended: false,
  parameterLimit: 1000000
}

app.use(helmet())
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded(urlencodedConfig))

v1(app)

if (NODE_ENV !== 'test') {
  server.listen(PORT, () => {
    return logger.log(`server started on PORT:${PORT} 🚀`)
  })
}

export default app
