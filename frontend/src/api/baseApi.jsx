import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
  });
  
  axiosInstance.interceptors.request.use((config) => {
    const authTokensJSON = localStorage.getItem('authTokens');
    const authTokens = JSON.parse(authTokensJSON);
    const accessToken = authTokens.accessToken;
    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }
  
    return config;
  });
  
  export default axiosInstance;