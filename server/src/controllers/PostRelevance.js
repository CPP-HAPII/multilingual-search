const {relevance} = require('../models')

module.exports = {
  async postRelevances (req, res) {
    try {
      await relevance.bulkCreate(req.body)
      // res.send(someStuff.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Something bad happened.'
      })
    }
  },
  async postRelevance (req, res) {
    try {
      await relevance.create(req.body)
    } catch (err) {
      res.status(400).send({
        error: 'Unable to create relevance'
      })
    }
  }
}
