const indexRoute = require("./index/index.js");
const aboutRoute = require("./about/index.js");
const dynamicRoute = require("./dynamic");
const notFindRoute = require("./notFind");

const combintionRouter = ({ router, server, app }) => {
  indexRoute({ router, server, app });
  aboutRoute({ router, server, app });
  dynamicRoute({ router, server, app });
  notFindRoute({ router, server, app });
};
module.exports = combintionRouter;
