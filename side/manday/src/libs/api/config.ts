import axios, { AxiosRequestConfig } from "axios";

const API_CONFIG: AxiosRequestConfig = {
  withCredentials: true,
};
const config = axios.create(API_CONFIG);

export default config;
