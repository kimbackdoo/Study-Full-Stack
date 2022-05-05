import axios from 'axios'

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_HOST })

instance.interceptors.request.use((config) => {
    return config
})

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default instance
