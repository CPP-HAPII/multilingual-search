const {experience} = require('../models')

module.exports = {
  async postQuestionnaire (req, res) {
    try {
      await experience.create(req.body).then(result => {
        res.send(result)
      })
    } catch (err) {
      res.status(400).send({
        error: 'Unable to create experience'
      })
    }
  }
}
