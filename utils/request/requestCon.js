export const config = {
  url: "/user",
  method: "get", // default
  baseURL: "https://some-domain.com/api/",

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [
    function(data, headers) {
      // Do whatever you want to transform the data
      return data;
    }
  ],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [
    function(data) {
      // Do whatever you want to transform the data
      return data;
    }
  ],

  // `headers` are custom headers to be sent
  headers: { "X-Requested-With": "XMLHttpRequest" },
  params: {},

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, { arrayFormat: "brackets" });
  },
  data: {},
  timeout: 1000,
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function(config) {
    /* ... */
  },
  auth: {},

  // `responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   browser only: 'blob'
  responseType: "json", // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: "utf8", // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: "XSRF-TOKEN", // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: "X-XSRF-TOKEN", // default
  // `onUploadProgress` allows handling of progress events for uploads
  onUploadProgress: function(progressEvent) {
    // Do whatever you want with the native progress event
  },
  // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function(progressEvent) {
    // Do whatever you want with the native progress event
  },
  // `maxContentLength` defines the max size of the http response content in bytes allowed
  maxContentLength: 2000,
  validateStatus: function(status) {
    return status >= 200 && status < 300; // default
  },
  maxRedirects: 5, // default
  socketPath: null, // default
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  proxy: {
    host: "127.0.0.1",
    port: 9000
  },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function(cancel) {})
};

// export const _createSign = (signParams, config) => {
//   const { data: ConfigData, url } = config;
//   let data = { ...ConfigData };

//   const arr = Object.values(signParams);
//   // 1. 将单次业务的请求数据(JSON)进行Base64编码（UTF-8）
//   dataBase64 = Base64.encode(JSON.stringify(data || ""));
//   arr.push(dataBase64);
//   // 2. 将编码后的请求数据和其他公共参数的值进行字典序排序
//   arr.sort();
//   // 3. 将排序后的所有字符串拼接成一个字符串进行SHA512加密
//   const res = arr.reduce((res, current) => res + current, "");
//   // console.log('签名加密前', res);
//   const sha512Data = sha512(res);
//   return sha512Data;
// };
