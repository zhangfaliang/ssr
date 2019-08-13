const { axios } = require("../utils/request/request.js");

export const getIndexData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
