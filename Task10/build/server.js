"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyparser = __importStar(require("body-parser"));
var express_session_1 = __importDefault(require("express-session"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var routes_1 = require("./routes/routes");
var logger_1 = require("./middlewares/logger");
var constants_1 = require("./constants/constants");
var database_1 = require("./database/database");
var cors_1 = __importDefault(require("cors"));
database_1.db.on('error', function (error) { console.log(error); });
database_1.db.once('open', function () {
    console.log("connected to database");
});
var app = express_1.default();
app.use(cookie_parser_1.default());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/', function (req, res, next) {
    logger_1.logger.info(req.body);
    logger_1.logger.info(res.body);
    next();
});
app.use(express_session_1.default({
    secret: constants_1.Secret,
    resave: true,
    saveUninitialized: true,
    cookie: {}
}));
app.use(cors_1.default());
app.use("/", routes_1.routes);
app.listen(1000, function () {
    console.log("server running");
});
