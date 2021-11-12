"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewService = void 0;
var database_1 = require("../database/database");
function viewService(decrypt) {
    return new Promise(function (resolve, reject) {
        database_1.pool.query("select name,age,gender,fatherName,DOB,maritalStatus,address,phonenumber from user where username =?", [decrypt], function (err, results) {
            if (!err) {
                resolve(results);
            }
            else {
                reject(err);
            }
        });
    });
}
exports.viewService = viewService;
