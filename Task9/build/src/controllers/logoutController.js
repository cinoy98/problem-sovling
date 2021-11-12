"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
function Logout(req, res) {
    req.session.logged;
    res.cookie('token', {}, { maxAge: -1 }).json({ message: "logged out" });
}
exports.Logout = Logout;
