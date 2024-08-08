const sequelizeDb = require('../../models')
const Cataloguecaib = sequelizeDb.Cataloguecaib

exports.create = (req, res) => {
  Cataloguecaib.bulkCreate(req.body).then(async data => {
    res.status(200).send(data)
  }).catch(err => {
    console.log(err)
    if (err.errors) {
      res.status(422).send({
        message: err.errors
      })
    } else {
      res.status(500).send({
        message: 'Algún error ha surgido al insertar el dato.'
      })
    }
  })
}

exports.findAll = (req, res) => {
  Cataloguecaib.findAll({
    order: [['createdAt', 'DESC']]
  })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(err)
      res.status(500).send({
        message: err.errors || 'Algun error ha surgido al recuperar los datos'
      })
    })
}
