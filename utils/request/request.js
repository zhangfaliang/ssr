import Axios from "axios";
import { config } from "./requestCon";
import { ProcessUpdateApi } from "./updateApi";

// Set config defaults when creating the instance
const axios = Axios.create({
  ...config
});

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json"
      // "API-APP-ID": signParams.appId, // 请求方appKey
      // "API-Client-ID": signParams.clientId, // 客户端唯一标识ID
      // "API-Request-Signature": signString, // 签名结果串
      // "API-Request-Timestamp": timestamp, // 时间戳 - 和生成签名时相同
      // "API-Request-ID": requestId, // 请求id - 和生成签名时相同
      // "API-User-OpenID": userOpenId, // 请求需要用户登录的接口时需要提供，详见：用户登录
      // "API-Access-Token": accessToken, // 请求需要用户登录的接口时需要提供，详见：用户登录 如不存在或接口返回 accessToken 已过期/已失效，需要重新申请
      // "Accept-Language": language[umi_locale] // 多语言支持 - zh: 中文 en: 英文
    };

    // config.data = {
    //   data: dataBase64,
    //   page: config.page,
    //   clientInfo: Object.assign({}, clientInfo, config.clientInfo),
    //   metaData: config.metaData
    // };
    console.log(config)
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    const apiParams = {
      config: error.config
    };

    // const processUpdateApi = new ProcessUpdateApi(apiParams, 2000, 10000);
    // return processUpdateApi.updateApi();
    throw new Error(error.stack);
  }
);

export { axios };
