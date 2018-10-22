import service from 'services/user/controllers'
import composeAppRoute from 'lib/compose/app.route'
import allow from 'middlewares/allow'

export default composeAppRoute(
  [
    ['get', '/', allow('auth'), 'all'],
  ],
  service
)
