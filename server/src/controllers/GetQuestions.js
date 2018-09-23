const {questions} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  async getQuestions (req, res) {
    try {
      await questions.findAll({where: {
        id: {[Op.between]: [req.body.start, req.body.end]}
      }}).then(question => {
        res.send(question)
      })
    } catch (err) {
      console.log('some error')
      res.status(400).send({
        error: 'No questions found.',
        start: req.body.start,
        end: req.body.end
      })
    }
  }
}
