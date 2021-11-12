"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validForgot = void 0;
var constants_1 = require("../constants/constants");
function validForgot(req, res) {
    var email = req.body.email;
    var phone = req.body.phonenumber;
    if (!constants_1.ValidMail.test(email)) {
        return false;
    }
    if (phone.length != 10) {
        return false;
    }
    return true;
}
exports.validForgot = validForgot;
