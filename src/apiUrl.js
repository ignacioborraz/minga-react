let apiUrl = 'https://minga.up.railway.app/api'

if (import.meta.env.VITE_VERCEL_ENV==='production') {
    apiUrl = import.meta.env.VITE_API_URL
}

export default apiUrl