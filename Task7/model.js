var getQuery= "select * from tasks";
var getQueryById="select * from tasks where id=?";
var deleteQuery="delete from tasks where id=?";
var postQuery ="insert into tasks (task) values(?)";
var updateQuery ="update tasks set task =? ,timestamp=? where id = ?";
module.exports={getQuery,getQueryById,deleteQuery,postQuery,updateQuery};