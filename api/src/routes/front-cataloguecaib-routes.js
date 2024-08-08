module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/front/cataloguecaib-controller.js')

  router.post('/', controller.create)
  router.get('/', controller.findAll)

  app.use('/api/front/cataloguecaib', router)
}
