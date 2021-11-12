"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validEdit = void 0;
var constants_1 = require("../constants/constants");
function validEdit(req, res) {
    var gender = req.body.gender;
    var status = req.body.maritalStatus;
    if (!constants_1.ValidGender.test(gender)) {
        return false;
    }
    if (!constants_1.ValidStatus.test(status)) {
        return false;
    }
    return true;
}
exports.validEdit = validEdit;
