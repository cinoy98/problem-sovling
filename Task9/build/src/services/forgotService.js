"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotService = void 0;
var database_1 = require("../database/database");
function forgotService(password, email, username, phonenumber) {
    return new Promise(function (resolve, reject) {
        database_1.pool.query("update user set password =? where email=? and phonenumber=? and username=?", [password, email, phonenumber, username], function (err) {
            if (!err) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.forgotService = forgotService;
