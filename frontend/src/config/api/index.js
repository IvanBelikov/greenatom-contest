import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const server = axios.create({
  baseURL: API_URL,
})

export default server
