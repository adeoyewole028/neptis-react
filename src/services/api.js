import axios from "axios";
import TokenService from "./token.service";

const baseURL = "https://neptisapi-58b97003294c.herokuapp.com/api/";

const apiConfig = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": baseURL,
    "Access-Control-Allow-Credentials": true,
  },
});

apiConfig.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiConfig.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error?.response?.status === 403) {
      TokenService.removeUser();
      window.location = "/login";
    } else if (error?.response?.status === 401) {
      const originalConfig = error.config;
      if (originalConfig.url !== "/api/auth/login") {
        window.location = "/login";
        TokenService.removeUser();
        // Call refresh token
        // Access Token was expired
        if (error.response.status === 400 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const rs = await apiConfig.post(`auth/jwt/refresh`, {
              refreshToken: TokenService.getLocalRefreshToken(),
            });
            const { accessToken } = rs.data;
            TokenService.updateLocalAccessToken(accessToken);
            return apiConfig(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
    } else {
      return Promise.reject(error?.response);
    }
    return Promise.reject(error?.response);
  }
);

const api = {
  get: (url) => apiConfig.get(url),
  post: (url, data) => apiConfig.post(url, data),
  put: (url, data) => apiConfig.put(url, data),
};

export default api;
