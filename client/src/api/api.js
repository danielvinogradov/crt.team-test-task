import axios from 'axios';

/**
 * Это Axios Instance, который мы используем для вызовов API
 * @type {AxiosInstance}
 */
const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

// интерсепторы добавлять сюда

export { api }