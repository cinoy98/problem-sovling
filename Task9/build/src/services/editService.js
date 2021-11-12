"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editService = void 0;
var database_1 = require("../database/database");
function editService(age, gender, fathername, dob, maritalStatus, addres, password, decrypt) {
    return new Promise(function (resolve) {
        database_1.pool.query("update user set age=?,gender=?,fatherName=?,DOB=?,maritalStatus=?,address=?,password=? where username =?", [age, gender, fathername, dob, maritalStatus, addres, password, decrypt], function (err) {
            if (!err) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.editService = editService;
