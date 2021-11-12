const { v4: uuidv4 } = require('uuid');
const sql = require("./database");
function signup(req, res) {
  sql.query(
    "insert into user values(?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.username,
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.age,
      req.body.gender,
      req.body.address,
      req.body.phonenumber,
      req.body.dob,
      req.body.fatherName,
      req.body.maritalStatus
    ],
    function (err, results) {
      if (!err) {
        res.json({ message: "Signed up successfully" });
      } else {
        console.log(err);
      }
    }
  );
}
function login(req, res) {
  let username = req.body.username;
  let password = req.body.password;
  sql.query(
    "select * from user where username =? and password =?",
    [username, password],
    (err, results) => {
      if (results.length ==1) {
        req.session.logged = true;
        req.session.username = username;
        req.session.password = password;
        res.json({ message: "login successfull" });
      } else {
        res.json({ message: "ERROR: INCORRECT CREDENTIALS", err });
      }
    }
  );
}
function view(req, res) {
  if (req.session.logged) {
    sql.query(
      "select name,age,gender,fatherName,DOB,maritalStatus,address,phonenumber from user where username =? and password =?",
      [req.session.username, req.session.password],
      (err, results) => {
        if (!err) {
          res.json({message:results});
        }
      }
    );
  }
  else{
    res.json({message:"ERROR: PLEASE LOGIN"})
    }
  req.session.destroy();
}
function forgot(req,res){
    let email= req.body.email;
    let phonenumber= req.body.phonenumber;
    let newPassword=uuidv4();
    sql.query("update user set password =? where email=? and phonenumber=?",[newPassword,email,phonenumber],(err,results)=>{
                if(!err){
                    res.json({message:"your password has been reset !!, kindly change the password with the one time password",newPassword},);
                }
                else{
                    res.json(err);
                }
            })            
        }
function edit(req,res){
    if (req.session.logged) {
        sql.query(
          "update user set age=?,gender=?,fatherName=?,DOB=?,maritalStatus=?,address=?,password=? where username =? and password =?",
          [req.body.age,req.body.gender,req.body.fatherName,req.body.dob,req.body.maritalStatus,req.body.address,req.body.password,req.session.username, req.session.password],
          (err, results) => {
            if (!err) {
              res.json({message:results});
            }
          }
        );
      }
      else{
        res.json({message:"ERROR: PLEASE LOGIN"})
        }
      req.session.destroy();
    }

module.exports = { signup, login, view, forgot ,edit}
