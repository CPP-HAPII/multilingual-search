const GetQuery = require('./controllers/GetQuery')
const GetResults = require('./controllers/GetResults')
const PostRelevance = require('./controllers/PostRelevance')
const Authentication = require('./controllers/Authentication.js')
const GetQuestions = require('./controllers/GetQuestions.js')

module.exports = (app) => {
  app.get('/queries',
    GetQuery.getQueries)
  app.post('/query',
    GetQuery.getQuery)
  app.get('/query/:qID',
    GetQuery.show)
  app.post('/results',
    GetResults.getResults)
  app.post('/relevance',
    PostRelevance.postRelevance)
  app.post('/register',
    Authentication.createUser)
  app.post('/questions',
    GetQuestions.getQuestions)
}
