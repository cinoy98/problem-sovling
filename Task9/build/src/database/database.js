"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var mysql_1 = __importDefault(require("mysql"));
var constants_1 = require("../constants/constants");
var pool = mysql_1.default.createPool({
    connectionLimit: constants_1.Limit,
    host: constants_1.Host,
    user: constants_1.User,
    password: constants_1.Password,
    database: constants_1.Database
});
exports.pool = pool;
pool.getConnection(function (err) {
    if (!err) {
        console.log("connection established");
    }
});
