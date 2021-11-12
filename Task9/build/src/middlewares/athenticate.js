"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
function authenticateToken(req, res, next) {
    if ((req.cookies.token == null) || (req.session.logged == false)) {
        res.json({ message: "ERROR: PLEASE LOGIN" });
    }
    next();
}
exports.authenticateToken = authenticateToken;
