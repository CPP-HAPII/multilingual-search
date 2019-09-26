const {demographic} = require('../models')

module.exports = {
  async postDemographic (req, res) {
    try {
      await demographic.create(req.body).then(result => {
        res.send(result)
      })
    } catch (err) {
      res.status(400).send({
        error: 'Unable to create demographic'
      })
    }
  }
}
