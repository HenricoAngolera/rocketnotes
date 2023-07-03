import axios from 'axios'

export const api = axios.create({
  baseURL: "https://rocket-notes-api-wjnd.onrender.com"
})

