"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validSignup = void 0;
var constants_1 = require("../constants/constants");
function validSignup(req, res) {
    var email = req.body.email;
    var phone = req.body.phonenumber;
    var gender = req.body.gender;
    var status = req.body.maritalStatus;
    if (!constants_1.ValidMail.test(email)) {
        return false;
    }
    if (phone.length != 10) {
        return false;
    }
    if (!constants_1.ValidGender.test(gender)) {
        return false;
    }
    if (!constants_1.ValidStatus.test(status)) {
        return false;
    }
    return true;
}
exports.validSignup = validSignup;
