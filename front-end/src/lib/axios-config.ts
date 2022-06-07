import axios from 'axios'

// TODO 전역으로 에러 핸들링 할 것
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
