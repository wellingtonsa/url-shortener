import { Router, Application } from 'express'
import URLController from '@controllers/URLController'

const routes = Router()

routes.get('/', URLController.topFive)
routes.get('/:short', URLController.findURL)
routes.post('/', URLController.create)

module.exports = (app:Application) => app.use('/url', routes)
