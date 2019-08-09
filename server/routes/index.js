const indexRoute = require("./index/index.js");
const aboutRoute = require("./about/index.js");
const dynamicRoute = require("./dynamic");
const notFindRoute = require("./notFind");

const combintionRouter = ({ router, server, app, handle }) => {
  indexRoute({ router, server, app, handle });
  aboutRoute({ router, server, app, handle });
  dynamicRoute({ router, server, app, handle });
  notFindRoute({ router, server, app, handle });
};
module.exports = combintionRouter;
