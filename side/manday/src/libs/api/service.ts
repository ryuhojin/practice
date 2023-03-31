import config from "./config";

const service = {
  get: (url: any, params: any) => {
    return config({ url, params, method: "GET" }).then((res) => res.data);
  },
  post: (url: any, params: any) => {
    return config({ url, params, method: "POST" }).then((res) => res.data);
  },
  delete: (url: any, params: any) => {
    return config({ url, params, method: "DELETE" }).then((res) => res.data);
  },
  put: (url: any, params: any) => {
    return config({ url, params, method: "PUT" }).then((res) => res.data);
  },
};

export default service;
