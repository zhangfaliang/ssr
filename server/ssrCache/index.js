const cacheableResponse = require("cacheable-response");

const ssrCache = app =>
  cacheableResponse({
    ttl: 1000 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams, ctx }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => {
      return res.end(data);
      // finish
      // end
      // end: [Array],
      // drain: [Array],
      // timeout: [Function: socketOnTimeout],
      // data: [Function: bound socketOnData],
      // error: [Array],
      // close: [Array],
      // resume: [Function: onSocketResume],
      // pause: [Function: onSocketPause]
    }
  });

module.exports = ssrCache;
