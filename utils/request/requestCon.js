export const config = {

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
