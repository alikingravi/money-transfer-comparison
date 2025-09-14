import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error),
);

export const apiGet = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await axiosInstance.get<T>(url, config);
  return response.data;
};

export default axiosInstance;
