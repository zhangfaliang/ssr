const { axios } = require("../utils/request/request.js");

export const getIndexData = () => {
  return axios.get("http://localhost:8000/");
};