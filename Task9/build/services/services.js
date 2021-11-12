"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edit = exports.Forgot = exports.View = exports.Login = exports.Signup = void 0;
var database_1 = require("../src/database/database");
var constants_1 = require("../src/constants/constants");
var validation_1 = require("../src/validations/validation");
var uuid_1 = require("uuid");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function Signup(res, username, name, email, password, age, gender, address, phonenumber, dob, fathername, maritalstatus) {
    database_1.pool.query("insert into user values(?,?,?,?,?,?,?,?,?,?,?)", [username, name, email, password, age, gender, address, phonenumber, dob, fathername, maritalstatus], function (err) { validation_1.signupValidate(res, err); });
}
exports.Signup = Signup;
function Login(username, password) {
    return new Promise(function (resolve, reject) {
        database_1.pool.query("select * from user where username =? and password =?", [username, password], function (err, results) {
            if (!err) {
                resolve(results[0]);
            }
            else {
                reject(err);
            }
        });
    });
}
exports.Login = Login;
/*                if (results.length == 1){
 
                    let token: string = jwt.sign(username, Secret);
                    res.cookie('token', token, { httpOnly: true });
                    res.json({ message: "login successfull" });
            } else {
                res.json({ message: "ERROR: INCORRECT CREDENTIALS", err });
            }*/
function View(res, decrypt) {
    database_1.pool.query("select name,age,gender,fatherName,DOB,maritalStatus,address,phonenumber from user where username =?", [decrypt], function (err, results) {
        validation_1.viewValidate(err, results, res);
    });
}
exports.View = View;
function Forgot(res, email, phonenumber) {
    var newPassword = uuid_1.v4();
    var modPassword = jsonwebtoken_1.default.sign(newPassword, constants_1.Secret);
    database_1.pool.query("update user set password =? where email=? and phonenumber=?", [modPassword, email, phonenumber], function (err) {
        validation_1.forgotValidate(err, res, newPassword);
    });
}
exports.Forgot = Forgot;
function Edit(res, age, gender, fathername, dob, maritalStatus, addres, password, decrypt) {
    database_1.pool.query("update user set age=?,gender=?,fatherName=?,DOB=?,maritalStatus=?,address=?,password=? where username =?", [age, gender, fathername, dob, maritalStatus, addres, password, decrypt], function (err, results) {
        validation_1.editValidate(err, results, res);
    });
}
exports.Edit = Edit;
