const {results} = require('../models')

module.exports = {
  async getResults (req, res) {
    try {
      await results.findAll({where: {qID: req.body.id}, limit: 10}).then(result => {
        res.send(result)
      })
    } catch (err) {
      console.log('some error')
      res.status(400).send({
        error: 'No results found.'
      })
    }
  }
}
