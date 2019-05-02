import Api from '@/services/Api'

export default {
  queries () {
    return Api().get('queries')
  },
  query (qID) {
    return Api().post('query', qID)
  },
  results (qID) {
    return Api().post('results', qID)
  },
  relevances (values) {
    return Api().post('relevances', values)
  },
  relevance (value) {
    return Api().post('relevance', value)
  },
  show (queryID) {
    return Api().get(`query/${queryID}`)
  },
  questions (range) {
    return Api().post('questions', range)
  }
}
