const indexRoute = require("./index/index.js");
const aboutRoute = require("./about/index.js");
const dynamicRoute = require("./dynamic");
const notFindRoute = require("./notFind");

const combintionRouter = ({
  connection,
  router,
  server,
  app,
  handle,
  ssrCache
}) => {
  indexRoute({ connection, router, server, app, handle, ssrCache });
  aboutRoute({ connection, router, server, app, handle, ssrCache });
  dynamicRoute({ connection, router, server, app, handle, ssrCache });
  notFindRoute({ connection, router, server, app, handle, ssrCache });
};
module.exports = combintionRouter;
