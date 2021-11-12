"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
exports.routes = routes;
var athenticate_1 = require("../middlewares/athenticate");
var editcontroller_1 = require("../controllers/editcontroller");
var forgotcontroller_1 = require("../controllers/forgotcontroller");
var logincontroller_1 = require("../controllers/logincontroller");
var signupcontroller_1 = require("../controllers/signupcontroller");
var viewController_1 = require("../controllers/viewController");
var logoutcontroller_1 = require("../controllers/logoutcontroller");
routes.post("/signup", signupcontroller_1.Signup);
routes.post("/login", logincontroller_1.Login);
routes.put("/forgot", forgotcontroller_1.Forgot);
routes.get("/view", athenticate_1.authenticateToken, viewController_1.View);
routes.put("/edit", athenticate_1.authenticateToken, editcontroller_1.Edit);
routes.get('/logout', logoutcontroller_1.Logout);