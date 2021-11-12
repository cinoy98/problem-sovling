var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit:40,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'login_module'
  });
pool.getConnection(function(err){
    if (!err){
        console.log("connection established");
    }
});
module.exports=pool;