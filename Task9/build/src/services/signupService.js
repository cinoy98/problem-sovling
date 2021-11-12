"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupService = void 0;
var database_1 = require("../database/database");
function signupService(username, name, email, password, age, gender, address, phonenumber, dob, fathername, maritalstatus) {
    return new Promise(function (resolve) {
        database_1.pool.query("insert into user values(?,?,?,?,?,?,?,?,?,?,?)", [username, name, email, password, age, gender, address, phonenumber, dob, fathername, maritalstatus], function (err) {
            if (!err) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.signupService = signupService;
