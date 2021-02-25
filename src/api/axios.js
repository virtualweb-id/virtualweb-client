import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://undanganku-id.herokuapp.com'
})

export default instance