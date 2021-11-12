"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//server side
var websocket_1 = require("websocket");
var http_1 = __importDefault(require("http"));
var Server = http_1.default.createServer(function (Request, Response) {
    console.log("request recieved from " + Request.url);
});
var wsServer = new websocket_1.server();
wsServer.mount({
    httpServer: Server,
    autoAcceptConnections: false
});
Server.listen(1000, function () {
    console.log("listening on port 1000");
});
wsServer.on("request", function (Request) {
    console.log((new Date()) + ' Connection accepted.');
    var connection = Request.accept('echo-protocol', Request.origin);
    connection.on("message", function (data) {
        console.log("recieved " + data.utf8Data);
    });
});
wsServer.on("connect", function (connection) {
    connection.on("message", function (data) {
        console.log("recieved", data);
    });
});
