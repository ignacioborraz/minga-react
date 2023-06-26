let apiUrl = 'http://localhost:8080/api'

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV==='production') {
    apiUrl = import.meta.env.API_URL
    console.log(apiUrl)
}

export default apiUrl