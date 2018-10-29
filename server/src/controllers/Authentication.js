const {users} = require('../models')

module.exports = {
  async createUser (req, res) {
    try {
      const user = await users.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Something bad happened.'
      })
    }
  }
}
