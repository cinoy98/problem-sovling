"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var constants_1 = require("../constants/constants");
mongoose_1.default.connect(constants_1.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose_1.default.Promise = global.Promise;
var db = mongoose_1.default.connection;
exports.db = db;
