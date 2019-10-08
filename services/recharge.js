const { axios } = require("../utils/request/request.js");

export const recharge = (data = {}) => {
  return axios.post("/api/common/recharge", {
    ...data
  });
};
