const GetQuery = require('./controllers/GetQuery')
const GetResults = require('./controllers/GetResults')
const PostRelevance = require('./controllers/PostRelevance')

module.exports = (app) => {
  app.get('/queries',
    GetQuery.getQuery)
  app.post('/results',
    GetResults.getResults)
  app.post('/relevance',
    PostRelevance.postRelevance)
}
