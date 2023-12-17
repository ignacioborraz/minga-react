let apiUrl = import.meta.env.PROD
  ? import.meta.env.VITE_URL
  : "http://localhost:8080/api";
//console.log(apiUrl);
export default apiUrl;
