import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3001'
  baseURL: 'https://undanganku-id.herokuapp.com'
})

export default instance