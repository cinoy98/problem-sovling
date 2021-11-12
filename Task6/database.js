var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit:25,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud'
  });
pool.getConnection(function(err){
    if (!err){
        console.log("connection established");
    }
});
module.exports=pool;