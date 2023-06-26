let apiUrl = 'http://localhost:8080/api'

console.log(import.meta.env.NODE_ENV)
if (import.meta.env.NODE_ENV==='production') {
    apiUrl = import.meta.env.API_URL
    console.log(import.meta.env.API_URL)
    console.log(apiUrl)
}

export default apiUrl