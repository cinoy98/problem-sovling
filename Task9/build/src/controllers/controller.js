"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.edit = exports.forgot = exports.view = exports.login = exports.signup = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var constants_1 = require("../constants/constants");
var services_1 = require("../../services/services");
function signup(req, res) {
    var username = req.body.username;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var age = req.body.age;
    var gender = req.body.gender;
    var address = req.body.address;
    var phonenumber = req.body.phonenumber;
    var dob = req.body.dob;
    var fathername = req.body.fatherName;
    var maritalstatus = req.body.maritalStatus;
    services_1.Signup(res, username, name, email, password, age, gender, address, phonenumber, dob, fathername, maritalstatus);
}
exports.signup = signup;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    username = req.body.username;
                    password = req.body.password;
                    return [4 /*yield*/, services_1.Login(username, password)];
                case 1:
                    x = _a.sent();
                    res.json({ message: x }); /*{
                      let token: string = jwt.sign(username, Secret);
                      res.cookie('token', token, { httpOnly: true });
                      res.json({message:"login successfull"})
                    }
                    else{
                      res.json({ message: "ERROR: INCORRECT CREDENTIALS"});
                    }*/
                    return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
function view(req, res) {
    var token = req.cookies.token;
    if (!token) {
        res.json({ message: "ERROR: PLEASE LOGIN" });
    }
    else {
        var decrypt = jsonwebtoken_1.default.verify(token.split(',')[0], constants_1.Secret);
        services_1.View(res, decrypt);
    }
}
exports.view = view;
function forgot(req, res) {
    var email = req.body.email;
    var phonenumber = req.body.phonenumber;
    services_1.Forgot(res, email, phonenumber);
}
exports.forgot = forgot;
function edit(req, res) {
    var token = req.cookies.token;
    if (!token) {
        res.json({ message: "ERROR: PLEASE LOGIN" });
    }
    else {
        var decrypt = jsonwebtoken_1.default.verify(token.split(',')[0], constants_1.Secret);
        var age = req.body.age;
        var gender = req.body.gender;
        var fathernam = req.body.fatherName;
        var dob = req.body.dob;
        var maritalStatus = req.body.maritalStatus;
        var addres = req.body.address;
        var password = jsonwebtoken_1.default.sign(req.body.password, constants_1.Secret);
        services_1.Edit(res, age, gender, fathernam, dob, maritalStatus, addres, password, decrypt);
    }
}
exports.edit = edit;
function logout(req, res) {
    res.cookie('token', {}, { maxAge: -1 }).json({ message: "logged out" });
}
exports.logout = logout;
