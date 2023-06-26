let apiUrl = 'http://localhost:8080/api'

console.log(import.meta.env.VITE_VERCEL_ENV)
if (import.meta.env.VITE_VERCEL_ENV==='production') {
    apiUrl = import.meta.env.VITE_API_URL
}

export default apiUrl