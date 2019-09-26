const { axios } = require("../utils/request/request.js");

export const sigIn = (inputValus = {}) => {
  return axios.post("/api/common/signin", {
    ...inputValus
  });
};

export const login = (inputValus = {}) => {
  return axios.post("/api/common/login", {
    ...inputValus
  });
};

export const changePWD = (inputValus = {}) => {
  return axios.post("/api/common/changepwd", {
    ...inputValus
  });
};

export const getUserInfo = () => {
  try {
    return axios.post("/api/common/userInfo", {});
  } catch (e) {
    console.log(e);
  }
};
