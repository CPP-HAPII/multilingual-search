const {searchQuery} = require('../models')

module.exports = {
  async getQuery (req, res) {
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
  }
}
