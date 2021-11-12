import mysql from 'mysql';
import{Limit,Host,User,Password,Database} from '../constants/constants';
var pool:any = mysql.createPool({
    connectionLimit: Limit,
    host: Host,
    user: User,
    password: Password,
    database: Database
  });
pool.getConnection((err:any)=>{
    if (!err){
        console.log("connection established");
    }
});
export {pool};