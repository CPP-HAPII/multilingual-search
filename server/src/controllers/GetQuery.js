const {searchQuery} = require('../models')

module.exports = {
  async getQueries (req, res) {
    try {
      await searchQuery.findAll().then(queries => {
        res.send(queries)
      })
    } catch (err) {
      console.log('some error')
      res.status(400).send({
        error: 'No queries found.'
      })
    }
  },
  async getQuery (req, res) {
    try {
      await searchQuery.findAll({where: {id: req.body.id}}).then(queries => {
        res.send(queries)
      })
    } catch (err) {
      console.log('some error')
      res.status(400).send({
        error: 'No queries found.'
      })
    }
  },
  async show (req, res) {
    try {
      await searchQuery.find({where: {id: req.params.qID}}).then(queries => {
        res.send(queries)
      })
    } catch (err) {
      res.status(400).send({
        error: 'No Query found.'
      })
    }
  }
}
