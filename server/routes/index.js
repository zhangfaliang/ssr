const indexRoute = require("./index/index.js");
const aboutRoute = require("./about/index.js");
const dynamicRoute = require("./dynamic");
const notFindRoute = require("./notFind");
const userRoute = require("./user");

const combintionRouter = ({ router, server, app, handle, ssrCache }) => {
  indexRoute({ router, server, app, handle, ssrCache });
  aboutRoute({ router, server, app, handle, ssrCache });
  dynamicRoute({ router, server, app, handle, ssrCache });
  notFindRoute({ router, server, app, handle, ssrCache });
  userRoute({ router, server, app, handle, ssrCache });
};
module.exports = combintionRouter;
