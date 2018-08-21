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
  relevance (values) {
    return Api().post('relevance', values)
  },
  show (queryID) {
    return Api().get(`query/${queryID}`)
  }
}
