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
      console.log('Posting relevance server side rank=' + req.body.rank)
      await relevance.create(req.body).then(result => {
        res.send(result)
      })
      console.log('relevance posted server side rank=' + req.body.rank)
    } catch (err) {
      res.status(400).send({
        error: 'Unable to create relevance'
      })
    }
  }
}
