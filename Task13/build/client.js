"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_1 = require("websocket");
var Client = new websocket_1.client();
Client.connect('ws://localhost:1000/', 'echo-protocol');
Client.on("connect", function (connection) {
    console.log("client connected");
    connection.on("error", function (err) {
        console.log("connection error. " + err.message);
    });
    if (connection.connected) {
        var stock = "provide stock price";
        connection.send(stock);
    }
    connection.on("message", function (data) {
        console.log("stock price is : " + data.utf8Data);
    });
});
