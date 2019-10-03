const {page} = require('../models')
const Sequelize = require('sequelize')

module.exports = {
  async postPage (req, res) {
    try {
      await page.create(req.body.toPost).then(result => {
        res.send(result)
      })
    } catch (err) {
      res.status(400).send({
        error: 'Unable to create page',
        request: req.body
      })
    }
  },

  async updatePage (req, res) {
    try {
      await page.update({
        exitAt: Sequelize.fn('NOW', 3)
      }, {
        where: {id: req.body.id}
      }).then(result => {
        console.log(req.body)
        res.send(result)
      })
    } catch (err) {
      res.status(400).send({
        error: 'Unable to update page'
      })
    }
  }
}
