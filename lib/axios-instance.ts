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
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error(
        `API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`,
      );
    } else if (error.request) {
      console.error("No response from the server", error.request);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }

    return Promise.reject(error);
  },
);

export const apiGet = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await axiosInstance.get<T>(url, config);
  return response.data;
};

export default axiosInstance;
