const loginRoute = require("./login/index.js");

const combintionRouter = ({ query, router, server, app, handle, ssrCache }) => {
  loginRoute({ query, router, server, app, handle, ssrCache });
};
module.exports = combintionRouter;
