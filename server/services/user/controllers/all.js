import composeWaterfall from 'lib/compose/waterfall'

function checkQuery (req, res, callback) {
  const data = {}
  return callback(null, data, res)
}


function fmtResult (data, res, callback) {
  return callback(null, { users: [] })
}

export default function (...args) {
  return composeWaterfall(args, [
    checkQuery,
    fmtResult
  ])
}
