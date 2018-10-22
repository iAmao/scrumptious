
const async = require('async')
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  next()
  // async.waterfall([
  //   async.apply(check, req, res),
  //   decodeToken,
  //   getUser
  // ], error => error
  //   ? res.status(403).json(util.response)
  //   : next()
  // )
}

module.exports = auth
