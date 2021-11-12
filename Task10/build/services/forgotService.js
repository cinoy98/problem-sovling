"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotService = void 0;
var schema_1 = require("../model/schema");
function forgotService(password, email, username, phonenumber) {
    var filter = { $and: [{ username: username }, { email: email }, { phonenumber: phonenumber }] };
    var update = { password: password };
    return new Promise(function (resolve) {
        schema_1.user.updateOne(filter, { $set: update }, { new: true }, function (err, doc) {
            if ((!err) && (doc.nModified == 1)) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.forgotService = forgotService;
