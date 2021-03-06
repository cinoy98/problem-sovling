"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidMail = exports.ValidStatus = exports.ValidGender = exports.Secret = exports.Database = exports.Password = exports.User = exports.Host = exports.Limit = void 0;
var Limit = 40;
exports.Limit = Limit;
var Host = 'localhost';
exports.Host = Host;
var User = 'root';
exports.User = User;
var Password = '1234';
exports.Password = Password;
var Database = 'login_module';
exports.Database = Database;
var Secret = "top_secret";
exports.Secret = Secret;
var ValidMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.(.[a-z]+)*$/;
exports.ValidMail = ValidMail;
var ValidGender = /^(?:m|M|male|Male|f|F|female|Female)$/;
exports.ValidGender = ValidGender;
var ValidStatus = /^(?:married|single)$/;
exports.ValidStatus = ValidStatus;
