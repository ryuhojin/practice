import instance from "./instance";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

export function get<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return instance.get<T>(url, config);
}

export function post<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return instance.post<T>(url, data, config);
}

export function put<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return instance.put<T>(url, data, config);
}

export function del<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return instance.delete<T>(url, config);
}
