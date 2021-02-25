import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://54.251.164.37:3001'
})

export default instance