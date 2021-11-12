"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editService = void 0;
var schema_1 = require("../model/schema");
function editService(filter, change) {
    return new Promise(function (resolve) {
        schema_1.user.findOneAndUpdate(filter, change, { new: true }, function (err) {
            if (!err) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.editService = editService;
