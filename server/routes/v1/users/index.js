import composeRouter from 'lib/compose/router'
import routes from 'services/user/routes'

export default router => composeRouter(routes, router)
