"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_1 = require("websocket");
var http_1 = __importDefault(require("http"));
var redis_1 = require("./redis");
redis_1.Redis.on("error", function (err) {
    console.log("error : " + err.message);
});
var Server = http_1.default.createServer(function (Request, Response) {
    console.log("Recieved request from " + Request.url);
});
var wsServer = new websocket_1.server();
wsServer.mount({
    httpServer: Server,
    autoAcceptConnections: false
});
Server.listen(1000, function () {
    console.log("listening to port 1000");
});
wsServer.on("request", function (Request) {
    console.log("connection accepted from " + Request.host);
    var connection = Request.accept('echo-protocol', Request.origin);
    connection.on("message", function (data) {
        console.log("recieved at server: " + data.utf8Data);
    });
});
wsServer.on("connect", function (connection) {
    function returnPrice() {
        redis_1.Redis.lpop("stock", function (err, reply) {
            connection.send(reply);
        });
    }
    if (connection.connected) {
        setInterval(returnPrice, 1000);
    }
});
