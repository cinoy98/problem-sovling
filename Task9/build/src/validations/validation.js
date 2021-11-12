"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editValidate = exports.forgotValidate = exports.viewValidate = exports.signupValidate = void 0;
function signupValidate(res, err) {
    if (!err) {
        res.json({ message: "Signed up successfully" });
    }
    else {
        res.json({ message: "Signup Unsuccessful", err: err });
    }
}
exports.signupValidate = signupValidate;
function viewValidate(err, results, res) {
    if (!err) {
        res.json({ message: results });
    }
    else {
        res.json({ message: "error occured", err: err });
    }
}
exports.viewValidate = viewValidate;
function forgotValidate(err, res, newPassword) {
    if (!err) {
        res.json({ message: "your password has been reset !!, kindly change the password with the one time password", newPassword: newPassword });
    }
    else {
        res.json({ message: "error occured", err: err });
    }
}
exports.forgotValidate = forgotValidate;
function editValidate(err, results, res) {
    if (!err) {
        res.json({ message: results });
    }
    else {
        res.json({ message: "ERROR occured", err: err });
    }
}
exports.editValidate = editValidate;
