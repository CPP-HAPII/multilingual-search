const {results} = require('../models')

module.exports = {
  async testJoin (req, res) {
    try {
      const lang1 = await results.findAll({where: {qID: req.body.lang1}, limit: 6})
      const lang2 = await results.findAll({where: {qID: req.body.lang2}, limit: 6})
      const myR = lang1 + lang2
      res.send(myR.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Something bad happened.'
      })
    }
  }
}
