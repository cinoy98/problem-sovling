var sql = require('./database.js');
var model=require('./model')
function getTasks(req,res){
    sql.query(model.getQuery,(err, rows) => {
        
        if (!err){
            res.status(200).json(rows);
        }
         else{
            res.status(404).json(err);
         }
        })
}
function getTaskById(req,res){
    sql.query(model.getQueryById,[req.params.id],(err, rows) => {
        if (!err){
            if(rows==''){
                res.status(404).json({message:"ERROR : NO TASK FOUND"});
            }
            else{
                res.status(200).json(rows);
            }
        }
         else{
            res.json(err);
         }
        })
}
function deleteTaskById(req,res){

    sql.query(model.deleteQuery,[req.params.id],(err,results)=>{
        if(!err){
            res.json({message:"deleted "+ results.affectedRows + " task"});
        }
        else{
            res.json(err);
        }
    })
}
function postTask(req,res){
    sql.query(model.postQuery,[req.params.name],(err,results) => {
        if (!err){
            res.json({message:"posted "+results.affectedRows+ " task"});
        }  
         else{
            res.json(err);
         }
            
        })
}
function updateTaskById(req,res){
    let timestamp = new Date();
    sql.query(model.updateQuery,[req.params.name,timestamp,req.params.id],(err,results) => {
        if (!err){
            res.json({message:"updated "+results.affectedRows+ " task"});
        }    
         else{
            res.json(err);
         }   
        })
}
module.exports={getTasks,getTaskById,deleteTaskById,postTask,updateTaskById}