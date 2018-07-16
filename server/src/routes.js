const GetQuery = require('./controllers/GetQuery')
const GetResults = require('./controllers/GetResults')

module.exports = (app) => {
  app.get('/queries',
    GetQuery.getQuery)
  app.post('/results',
    GetResults.getResults)
}
