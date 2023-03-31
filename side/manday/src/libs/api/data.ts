import config from "./config";

const data = {
  getRest: (year: number) => {
    return config({
      url: `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=${year}&numOfRows=100&ServiceKey=tvSVgy9u7SBnvrhgiHDXYDNHWeCoh6Rv2WZQFo05b5tno5M3z2U0cSdXzPgzvsv5VL34fNXqLs59CVBF%2B9Mfrw%3D%3D`,
      method: "GET",
    }).then((res) => res.data);
  },
};

export default data;
