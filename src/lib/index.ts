import axios from "axios"

export const api = axios.create({
   baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:5000",
})

export const setAuthToken = (token?: string) => {
   if (token) {
     api.defaults.headers.common["Authorization"] = `Bearer ${token}`
   } else {
    delete api.defaults.headers.common["Authorization"]
   }
}
