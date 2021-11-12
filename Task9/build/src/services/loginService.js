"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
var database_1 = require("../database/database");
function loginService(Username, Password) {
    return new Promise(function (resolve, reject) {
        database_1.pool.query("select * from user where username =? and password =?", [Username, Password], function (err, results) {
            if (!err) {
                if (results[0] != null) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }
            else {
                reject(err);
            }
        });
    });
}
exports.loginService = loginService;
