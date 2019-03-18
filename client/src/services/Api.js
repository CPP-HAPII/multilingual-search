import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081/`
    // baseURL: `http://54.193.20.125:8081/`
  })
}
