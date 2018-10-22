import async from 'async'
import logger from 'lib/logger'
import composeResponse from 'lib/compose/response'

const composeWaterfall = ([req, res], waterfall, withSocket = false) => {
  logger.log(`START: [${req.method}]`, req.originalUrl)
  const unfoldWaterfall = waterfall.map((fn, i) => {
    return (...args) => {
      logger.log(`\tRunning block: ${fn.name}`)
      if (withSocket) {
        if (waterfall.length - 1 === i) {
          args[0].socket = req.socket
        }
      }
      fn(...args)
    }
  })

  unfoldWaterfall[0] = async.apply(unfoldWaterfall[0], req, res)

  const response = composeResponse(res)

  const done = (error, result, metadata = null) => {
    logger.log(`DONE: [${req.method}]`, req.originalUrl)
    if (error) {
      logger.log(error.code)
      return response.error(error.code, error)
    } else {
      const { statusCode = 200 } = result
      delete result.statusCode
      return response.success(statusCode, result, metadata)
    }
  }

  // Do Async Op
  async.waterfall(unfoldWaterfall, done)
}

export default composeWaterfall
