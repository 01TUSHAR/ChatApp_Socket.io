import axios from 'axios'

export const axiosInstance = axios.create({
  baseUrl: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
})
