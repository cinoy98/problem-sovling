"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupService = void 0;
var schema_1 = require("../model/schema");
function signupService(userdata) {
    return new Promise(function (resolve) {
        schema_1.user.create(userdata, function (err) {
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
