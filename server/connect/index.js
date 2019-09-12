var mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "qqqqqq",
  database: "cartoon",
  multipleStatements: true, //允许多条sql同时执行
  port: 3306
});

let query = function(sql, values) {
  // 返回一个 Promise
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          // 结束会话
          connection.release();
        });
      }
    });
  });
};

module.exports = query;
