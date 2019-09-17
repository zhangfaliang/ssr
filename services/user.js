const { axios } = require("../utils/request/request.js");

export const sigIn = (inputValus = {}) => {
  return axios.post("/api/common/signin", {
    ...inputValus
  });
};
