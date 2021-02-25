import axios from 'axios'
import { API_TOKEN, API_URL } from './url'

const http = axios.create({
  baseURL: API_URL,
  params: {
    token: API_TOKEN
  }
})

export default http
