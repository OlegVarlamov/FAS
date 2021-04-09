/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_ROOT });

axiosInstance.interceptors.request.use(async (config) => {
  try {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      // Authorization: `Bearer ${state.auth.token}`,
      // language: `${getLanguage()}`,
      ...config.headers,
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
  return config;
});

const apiClient = {
  get<T>(url: string, config: any) {
    return axiosInstance.get<T>(url, config);
  },
  post<T>(url: string, data: any) {
    return axiosInstance.post<T>(url, data);
  },
  put<T>(url: string, data: any) {
    return axiosInstance.put<T>(url, data);
  },
  patch<T>(url: string, data: any) {
    return axiosInstance.patch<T>(url, data);
  },
  delete(url: string) {
    return axiosInstance.delete(url);
  },
};

export default apiClient;
