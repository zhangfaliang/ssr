var mysql = require("mysql");
try {
  var connection = mysql.createConnection({
    host: "localhost", // 连接的服务器
    user: "root", // 用户名
    password: "qqqqqq", // 用户密码
    database: "cartoon", // 选择的库
    multipleStatements: true,//允许多条sql同时执行
    port:3306,
  });
  connection.connect(); // 创建一个mysql的线程
} catch (error) {
  console.log(error); 
}
module.exports = connection;

