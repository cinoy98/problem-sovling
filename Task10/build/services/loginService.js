"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
var schema_1 = require("../model/schema");
function loginService(Username, Password) {
    return new Promise(function (resolve, reject) {
        var query = schema_1.user.findOne({ $and: [{ username: Username }, { password: Password }] }, { password: 0 });
        query.exec(function (err, res) {
            if (!err) {
                if (res != null) {
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
