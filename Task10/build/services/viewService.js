"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewService = void 0;
var schema_1 = require("../model/schema");
function viewService(decrypt) {
    return new Promise(function (resolve, reject) {
        var query = schema_1.user.findOne({ username: decrypt });
        query.select('name age gender dob address fathername maritalstatus');
        query.exec(function (err, res) {
            if (!err) {
                resolve(res);
            }
            else {
                reject(err);
            }
        });
    });
}
exports.viewService = viewService;
