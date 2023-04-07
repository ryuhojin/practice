import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const instance = axios.create({
  baseURL: "",
});

instance.interceptors.request.use(
  (req: InternalAxiosRequestConfig) => {
    return req;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

export default instance;
