const { axios } = require("../utils/request/request.js");

export const standardRecharge = (data = {}) => {
  return axios.post("/api/common/standard", {
    ...data
  });
};

export const customRecharge = (data = {}) => {
  return axios.post("/api/common/custom", {
    ...data
  });
};

export const orderQuery = (data = {}) => {
  return axios.post("/api/common/query", {
    ...data
  });
};


