let apiUrl = 'http://localhost:8080/api'

if (import.meta.env.NODE_ENV==='production') {
    apiUrl = import.meta.env.API_URL
}

export default apiUrl